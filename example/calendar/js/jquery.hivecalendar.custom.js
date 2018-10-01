(function (win, $, doc) {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        pluginName = 'HiveDatepicker';
    win[pluginName] = function (container, args) {
        if (!(this instanceof win[pluginName])) {
            return new win[pluginName](container, args);
        }
        var defParams = {
            nowDate : (function () {
                var date = new Date(),
                    dateObj = {
                        getFullYear : date.getFullYear(),
                        getMonth : date.getMonth() + 1,
                        getDate : date.getDate()
                    };
                return dateObj; 
            })(),
            isDevice : (function () {
                return ('ontouchstart' in win || (win.DocumentTouch && doc instanceof win.DocumentTouch));
            })(),
            datePickerWrapElements : container || '.hive-datepicker-wrap',
            customEvent : '.' + pluginName + (new Date()).getTime(),
            dateWrapClass : 'dp-table-wrap',
            dateInfoClass : 'dp-table-info',
            dateContainerClass : 'dp-table-container',
            optionsWrapClass : 'dp-options-wrap',
            btnPrevYearClass : 'dp-prev-year',
            btnPrevMonthClass : 'dp-prev-month',
            btnNextMonthClass : 'dp-next-month',
            btnNextYearClass : 'dp-next-year',
            btnTodayMonthClass : 'dp-today-month',
            btnCloseClass : 'dp-close',
            calActiveClass : 'dp-active',
            calTodayClass : 'dp-today',
            calRestClass : 'dp-special',
            dateFormat : 'mm/dd/yy',
            dataLinkDateName : 'link-date',
            restDays : [],
            weekText : ['일','월','화','수','목','금','토'],
            monthText : ['01','02','03','04','05','06','07','08','09','10','11','12'],
            dayText : ['01','02','03','04','05','06','07','08','09','10',
                '11','12','13','14','15','16','17','18','19','20',
                '21','22','23','24','25','26','27','28','29','30','31'],
            captionText : '달력 캡션',
            prevYearText : '이전년 이동',
            prevMonthText : '이전월 이동',
            nextMonthText : '다음월 이동',
            nextYearText : '다음년 이동',
            todayMonthText : '현재월 이동',
            closeText : '달력닫기',
            selectDate : null,
            range : false,
            rangeFromDate : null,
            rangeToDate : null,
            dragRange : false,
            mousewheelControl : false,
            onSelect : null
        };
        var def = function (org, src) {
            for (var prop in src) {
                if (!hasOwnProperty.call(src, prop)) continue;
                if ('object' === $.type(org[prop])) {
                    org[prop] = ('array' === $.type(org[prop])) ? src[prop].slice(0) : def(org[prop], src[prop]);
                } else {
                    org[prop] = src[prop];
                }
            }
            return org;
        };
        if (!(this.datePickerWrap = $(defParams.datePickerWrapElements)).length) return;
        this.opts = def(defParams, this.datePickerWrap.data('hivedatepicker-opts') || args || {});
        this.init();
    };
    win[pluginName].prototype = {
        init : function () {
            this.initOpts();
            this.initLayout();
        },
        initOpts : function () {
            var nowDate = this.opts.nowDate,
                iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
            this.opts.moveYear = this.todayYear = nowDate.getFullYear;
            this.opts.moveMonth = this.todayMonth = nowDate.getMonth;
            this.opts.moveDate = this.todayDate = nowDate.getDate;
            this.opts.choiceFullDate = null;
            this.onSelect = this.opts.onSelect;
            if (this.opts.isDevice && this.opts.dragRange) {
                this.opts.dragRange = false;
                this.opts.range = true;
            } else if (this.opts.dragRange) {
                this.opts.range = false;
            }
            for (var i = 0; i < this.opts.dateFormat.length; i++) {
                if (iChars.indexOf(this.opts.dateFormat.charAt(i)) != -1) {
                    this.opts.middleText = this.opts.dateFormat.charAt(i);
                }
            }
            if (this.opts.selectDate && this.opts.selectDate.length) {
                var selectDateObject = this.dateObjectBuild(this.opts.selectDate);
                this.opts.choiceYear = selectDateObject.year;
                this.opts.choiceMonth = selectDateObject.month;
                this.opts.choiceDate = selectDateObject.date;
            }
            if (this.opts.range || this.opts.dragRange) {
                if (this.opts.rangeFromDate && this.opts.rangeFromDate.length) {
                    var rangeFromDate = this.dateObjectBuild(this.opts.rangeFromDate);
                    this.opts.rangeFromDate = rangeFromDate.year + this.opts.middleText + this.opts.monthText[rangeFromDate.month - 1] + this.opts.middleText + this.opts.dayText[rangeFromDate.date - 1];
                }
                if (this.opts.rangeToDate && this.opts.rangeToDate.length) {
                    var rangeToDate = this.dateObjectBuild(this.opts.rangeToDate);
                    this.opts.rangeToDate = rangeToDate.year + this.opts.middleText + this.opts.monthText[rangeToDate.month - 1] + this.opts.middleText + this.opts.dayText[rangeToDate.date - 1];
                }
            }
        },
        initLayout : function () {
            this.createOptions();
            this.createElements();
            this.createCalendar();
            this.bindEvents();
        },
        changeEvents : function (event) {
            var events = [],
                eventNames = event.split(' ');
            for (var key in eventNames) {
                events.push(eventNames[key] + this.opts.customEvent);
            }
            return events.join(' ');
        },
        bindEvents : function () {
            this.btnPrevYear.on(this.changeEvents('click'), $.proxy(this.onPrevYear, this));
            this.btnPrevMonth.on(this.changeEvents('click'), $.proxy(this.onPrevMonth, this));
            this.btnNextMonth.on(this.changeEvents('click'), $.proxy(this.onNextMonth, this));
            this.btnNextYear.on(this.changeEvents('click'), $.proxy(this.onNextYear, this));
            this.btnCurrentMonth.on(this.changeEvents('click'), $.proxy(this.onCurrentMonth, this));
            this.btnCalClose.on(this.changeEvents('click'), $.proxy(this.onCalClose, this));
            this.objContainer.on(this.changeEvents('click'), 'a', $.proxy(this.onClickDay, this));
            this.objContainer.on(this.changeEvents('keydown'), 'a', $.proxy(this.onKeyDownDay, this));
            if (this.opts.mousewheelControl) {
                this.objContainer.on(this.changeEvents('mousewheel'), $.proxy(this.onMouseWheelFunc, this));
            }
        },
        dragBindEvents : function (type) {
            var moveCalendarLink = this.moveCalendarLink;
            if (type) {
                moveCalendarLink.on(this.changeEvents('mousedown mouseup mouseenter focusin keyup'), $.proxy(this.onDragFunc, this));
            } else {
                moveCalendarLink.off(this.changeEvents('mousedown mouseup mouseenter focusin keyup'));
            }
        },
        dragDocBindEvents : function (type) {
            if (type) {
                $(doc).on(this.changeEvents('mousemove mouseup'), $.proxy(this.onDragDocMouseUpFunc, this));
            } else {
                $(doc).off(this.changeEvents('mousemove mouseup'));
            }
        },
        onDragFunc : function (e) {
            var target = $(e.currentTarget);
            if (e.type === 'mousedown') {
                e.preventDefault();
                e.stopPropagation();
                var targetDate = target.data(this.opts.dataLinkDateName);
                if (this.objDown) return;
                this.objDown = true;
                this.opts.rangeFromDate = targetDate.fullDate;
                target.triggerHandler(this.changeEvents('mouseenter'));
                target.focus();
                this.dragDocBindEvents(true);
            } else if (e.type === 'mouseup') {
                e.stopPropagation();
                this.dragDocBindEvents(false);
                if (!this.objDown) return;
                this.objDown = false;
                target.focus();
                this.rangeEndFunc();
            } else if (e.type === 'mouseenter' || e.type === 'focusin') {
                e.stopPropagation();
                this.enterTarget = target;
                if (!this.objDown) return;
                this.dragActiveView(target);
            } else if (e.type === 'keyup') {
                var keyCode = e.which || e.keyCode;
                if (this.enterDown) {
                    if (keyCode === 16) {
                        this.shiftDown = false;
                    }
                }
            }
        },
        onDragDocMouseUpFunc : function (e) {
            if (e.type === 'mousemove') {
                e.preventDefault();
            } else if (e.type === 'mouseup') {
                this.enterTarget.triggerHandler(this.changeEvents('mouseup'));
            }
        },
        dragActiveView : function (target) {
            var moveCalendarLink = this.moveCalendarLink,
                targetData = target.data(this.opts.dataLinkDateName).fullDate;
            for (var i = 0, max = moveCalendarLink.length; i < max; i++) {
                var targets = moveCalendarLink.eq(i),
                    targetsData = targets.data(this.opts.dataLinkDateName).fullDate,
                    rangeType = this.rangeCompare(this.opts.rangeFromDate, targetsData, targetData);
                targets.parent().toggleClass(this.opts.calActiveClass, rangeType);
                if (rangeType) {
                    this.opts.rangeToDate = targetData;
                }
            }
        },
        onPrevYear : function () {
            this.opts.moveYear -= 1;
            this.rangeBuild();
            this.createCalendar();
        },
        onPrevMonth : function () {
            this.opts.moveMonth -= 1;
            if (this.opts.moveMonth <= 0) {
                this.opts.moveYear -= 1;
                this.opts.moveMonth = 12;
            }
            this.rangeBuild();
            this.createCalendar();
        },
        onNextMonth : function () {
            this.opts.moveMonth += 1;
            if (this.opts.moveMonth > 12) {
                this.opts.moveYear += 1;
                this.opts.moveMonth = 1;
            }
            this.rangeBuild();
            this.createCalendar();
        },
        onNextYear : function () {
            this.opts.moveYear += 1;
            this.rangeBuild();
            this.createCalendar();
        },
        onCurrentMonth : function () {
            this.opts.moveYear = this.todayYear;
            this.opts.moveMonth = this.todayMonth;
            this.opts.moveDate = this.todayDate;
            this.rangeBuild();
            this.createCalendar();
        },
        onCalClose : function () {
            if (win.console) win.console.log(this.opts.closeText);
        },
        onClickDay : function (e) {
            e.preventDefault();
            if (!this.opts.dragRange) {
                var target = $(e.currentTarget),
                    targetDate = target.data(this.opts.dataLinkDateName);
                this.opts.choiceYear = targetDate.year;
                this.opts.choiceMonth = targetDate.month;
                this.opts.choiceDate = targetDate.date;
                this.opts.choiceFullDate = this.dateStringBuild(this.opts.choiceYear, this.opts.choiceMonth, this.opts.choiceDate);
                this.dayClickType = true;
                if (this.opts.range) {
                    if (this.opts.rangeFromDate && this.opts.rangeToDate) {
                        this.opts.rangeFromDate = this.opts.rangeToDate = null;
                    }
                    if (!this.opts.rangeFromDate) {
                        this.opts.rangeFromDate = targetDate.fullDate;
                        this.createCalendar();
                    } else {
                        this.opts.rangeToDate = targetDate.fullDate;
                        this.createCalendar();
                        this.rangeEndFunc();
                    }
                } else {
                    this.createCalendar();
                    this.outCallback('onSelect', this.opts.choiceFullDate, this);
                }
            }
        },
        onKeyDownDay : function (e) {
            var target = $(e.currentTarget),
                moveCalendarLink = this.moveCalendarLink,
                targetIndex = moveCalendarLink.index(target),
                keyCode = e.which || e.keyCode,
                moveIndex = targetIndex;
            if (this.opts.dragRange) {
                if (keyCode === 13) {
                    if (this.enterDown) {
                        this.enterDown = false;
                        target.triggerHandler(this.changeEvents('mouseup'));
                    } else {
                        this.enterDown = true;
                        target.triggerHandler(this.changeEvents('mousedown'));
                        target.triggerHandler(this.changeEvents('mouseenter'));
                    }
                } else if (keyCode === 9) {
                    if (this.enterDown) {
                        if (this.shiftDown) {
                            moveIndex = moveIndex - 1;
                        } else {
                            moveIndex = moveIndex + 1;
                        }
                        target.eq(moveIndex).triggerHandler(this.changeEvents('mouseenter'));
                    }
                } else if (keyCode === 16) {
                    if (this.enterDown) {
                        this.shiftDown = true;
                    }
                }
            }
            if (keyCode === 37) {
                e.preventDefault();
                moveIndex = moveIndex - 1;
                if (moveIndex <= 0) {
                    moveIndex = 0;
                }
            } else if (keyCode === 38) {
                e.preventDefault();
                moveIndex = moveIndex - 7;
                if (moveIndex < 0) {
                    moveIndex = targetIndex;
                }
            } else if (keyCode === 39) {
                e.preventDefault();
                moveIndex = moveIndex + 1;
                if (moveIndex >= moveCalendarLink.length) {
                    moveIndex = moveCalendarLink.length;
                }
            } else if (keyCode === 40) {
                e.preventDefault();
                moveIndex = moveIndex + 7;
                if (moveIndex >= moveCalendarLink.length) {
                    moveIndex = targetIndex;
                }
            }
            if ((keyCode === 37) || (keyCode === 38) || (keyCode === 39) || (keyCode === 40)) {
                moveCalendarLink.eq(moveIndex).focus();
            }
        },
        onMouseWheelFunc : function (e) {
            e.preventDefault();
            if (e.deltaY < 0) {
                 this.btnNextMonth.triggerHandler(this.changeEvents('click'));
            } else {
                 this.btnPrevMonth.triggerHandler(this.changeEvents('click'));
            }
        },
        rangeEndFunc : function () {
            var sortArrays = [this.opts.rangeFromDate, this.opts.rangeToDate].sort(),
                fromData = sortArrays[0].split(this.opts.middleText),
                toData = sortArrays[1].split(this.opts.middleText),
                dataObj = {
                    fromDate : this.dateStringBuild(fromData[0], fromData[1], fromData[2]),
                    toDate : this.dateStringBuild(toData[0], toData[1], toData[2])
                };
            this.opts.rangeFromObject = this.dateObjectBuild(dataObj.fromDate);
            this.opts.rangeToObject = this.dateObjectBuild(dataObj.toDate);
            this.outCallback('onSelect', dataObj, this);
        },
        rangeCompare : function (startDate, inDate, endDate) {
            var sortArrays = [startDate, inDate, endDate].sort();
            return (sortArrays[1] === inDate) ? true : false;
        },
        rangeBuild : function () {
            this.minCssBuild();
            this.maxCssBuild();
        },
        minDate : function (date) {
            var minDate = this.dateObjectBuild(date);
            this.opts.rangeMinYear = minDate.year;
            this.opts.rangeMinMonth = minDate.month;
            this.opts.rangeMinDate = minDate.date;
            this.minCssBuild();
            this.createCalendar();
        },
        maxDate : function (date) {
            var maxDate = this.dateObjectBuild(date);
            this.opts.rangeMaxYear = maxDate.year;
            this.opts.rangeMaxMonth = maxDate.month;
            this.opts.rangeMaxDate = maxDate.date;
            this.maxCssBuild();
            this.createCalendar();
        },
        minCssBuild : function () {
            if (!this.opts.rangeMinYear) return;
            if ((this.opts.moveYear <= this.opts.rangeMinYear) && (this.opts.moveMonth <= this.opts.rangeMinMonth)) {
                this.btnPrevYear.prop('disabled', true);
                this.btnPrevMonth.prop('disabled', true);
                this.opts.moveYear = this.opts.rangeMinYear;
                this.opts.moveMonth = this.opts.rangeMinMonth;
            } else {
                this.btnPrevYear.prop('disabled', false);
                this.btnPrevMonth.prop('disabled', false);
            }
            if (this.opts.moveYear < this.opts.rangeMinYear) {
                this.btnPrevYear.prop('disabled', true);
                this.btnPrevMonth.prop('disabled', true);
                this.opts.moveYear = this.opts.rangeMinYear;
                this.opts.moveMonth = this.opts.rangeMinMonth;
            }
        },
        maxCssBuild : function () {
            if (!this.opts.rangeMaxYear) return;
            if ((this.opts.moveYear >= this.opts.rangeMaxYear) && (this.opts.moveMonth >= this.opts.rangeMaxMonth)) {
                this.btnNextYear.prop('disabled', true);
                this.btnNextMonth.prop('disabled', true);
                this.opts.moveYear = this.opts.rangeMaxYear;
                this.opts.moveMonth = this.opts.rangeMaxMonth;
            } else {
                this.btnNextYear.prop('disabled', false);
                this.btnNextMonth.prop('disabled', false);
            }
            if (this.opts.moveYear > this.opts.rangeMaxYear) {
                this.btnNextYear.prop('disabled', true);
                this.btnNextMonth.prop('disabled', true);
                this.opts.moveYear = this.opts.rangeMaxYear;
                this.opts.moveMonth = this.opts.rangeMaxMonth;
            }
        },
        createOptions : function (){
            var layoutOptions = [];
            layoutOptions.push('<div class="' + this.opts.optionsWrapClass + '">');
            layoutOptions.push('<button type="button" class="' + this.opts.btnPrevYearClass + '">' + this.opts.prevYearText + '</button>');
            layoutOptions.push('<button type="button" class="' + this.opts.btnPrevMonthClass + '">' + this.opts.prevMonthText + '</button>');
            layoutOptions.push('<button type="button" class="' + this.opts.btnNextMonthClass + '">' + this.opts.nextMonthText + '</button>');
            layoutOptions.push('<button type="button" class="' + this.opts.btnNextYearClass + '">' + this.opts.nextYearText + '</button>');
            layoutOptions.push('</div>');
            layoutOptions.push('<div class="' + this.opts.dateWrapClass + '">');
            layoutOptions.push('<div class="' + this.opts.dateInfoClass + '">');
            layoutOptions.push('</div>');
            layoutOptions.push('<div class="' + this.opts.dateContainerClass + '">');
            layoutOptions.push('</div>');
            layoutOptions.push('</div>');
            layoutOptions.push('<div class="' + this.opts.optionsWrapClass + '">');
            layoutOptions.push('<button type="button" class="' + this.opts.btnTodayMonthClass + '">' + this.opts.todayMonthText + '</button>');
            layoutOptions.push('<button type="button" class="' + this.opts.btnCloseClass + '">' + this.opts.closeText + '</button>');
            layoutOptions.push('</div>');
            this.datePickerWrap.get(0).innerHTML = layoutOptions.join('');
        },
        createElements : function () {
            this.optionsWrap = this.datePickerWrap.find('.' + this.opts.optionsWrapClass);
            this.btnPrevYear = this.optionsWrap.find('.' + this.opts.btnPrevYearClass);
            this.btnPrevMonth = this.optionsWrap.find('.' + this.opts.btnPrevMonthClass);
            this.btnNextMonth = this.optionsWrap.find('.' + this.opts.btnNextMonthClass);
            this.btnNextYear = this.optionsWrap.find('.' + this.opts.btnNextYearClass);
            this.btnCurrentMonth = this.optionsWrap.find('.' + this.opts.btnTodayMonthClass);
            this.btnCalClose = this.optionsWrap.find('.' + this.opts.btnCloseClass);
            this.objCalendar = this.datePickerWrap.find('.' + this.opts.dateWrapClass);
            this.objInfo = this.objCalendar.find('.' + this.opts.dateInfoClass);
            this.objContainer = this.objCalendar.find('.' + this.opts.dateContainerClass);
        },
        createCalendar : function () {
            var layoutCalendar = [],
                pPrevMonth = new Date(this.opts.moveYear, (this.opts.moveMonth - 2), 1),
                prevMonth = new Date(this.opts.moveYear, (this.opts.moveMonth - 1), 1),
                currentMonth = new Date(this.opts.moveYear, this.opts.moveMonth, 1),
                weekFirstDay = prevMonth.getDay(),
                daysCurrentMonth = Math.floor((currentMonth.getTime() - prevMonth.getTime()) / (1000 * 60 * 60 * 24)),
                daysPrevMonth = Math.floor((prevMonth.getTime() - pPrevMonth.getTime()) / (1000 * 60 * 60 * 24)),
                week_day = 0;
            if ((this.moveMonth - 1) == 2) {
                daysCurrentMonth = 31;
            }
            layoutCalendar.push('<div class="">' + this.dateStringBuild(this.moveYear, this.moveMonth) + '</div>');
            layoutCalendar.push('<ul>');
            week_day = weekFirstDay;
            var mm = currentMonth.getMonth(),
                mm = (mm == 0) ? 12 : mm;
            for (var day_counter = 1; day_counter <= daysCurrentMonth; day_counter++) {
                week_day %= 7;
                if (week_day === 0) {
                    layoutCalendar.push('<li class="sun">');
                } else if (week_day === 6) {
                    layoutCalendar.push('<li class="sat">');
                } else {
                    layoutCalendar.push('<li>');
                }
                layoutCalendar.push('<span>' + this.opts.weekText[week_day] + '</span>');
                if (this.opts.dragRange) {
                    layoutCalendar.push('<a tabindex="0">' + day_counter + '</a>');
                } else {
                    layoutCalendar.push('<a href ="' + day_counter + '">' + day_counter + '</a>');
                }
                layoutCalendar.push('</li>');
                week_day++;
            }
            layoutCalendar.push('</ul>');
            this.objInfo.get(0).innerHTML = this.dateStringBuild(this.opts.moveYear, this.opts.moveMonth);
            this.objContainer.get(0).innerHTML = layoutCalendar.join('');
            this.createDataBuild();
            this.createCssBuild();
            this.useageCssBuild();
            if (this.opts.dragRange) {
                this.dragBindEvents(false);
                this.dragBindEvents(true);
                this.useageRangeCssBuild();
            }
        },
        createDataBuild : function () {
            var _this = this;
            this.moveCalendarLink = this.objContainer.find('a').filter(function () {
                var target = $(this),
                    dataObj = {
                        year : _this.opts.moveYear,
                        month : _this.opts.moveMonth,
                        date : parseInt(target.text(), 10),
                        fullDate : _this.opts.moveYear + _this.opts.middleText + 
                            _this.opts.monthText[_this.opts.moveMonth - 1] + _this.opts.middleText + 
                            _this.opts.dayText[target.text() - 1]
                    };
                target.data(_this.opts.dataLinkDateName, dataObj);
                return true;
            });
        },
        createCssBuild : function () {
            var moveCalendarLink = this.moveCalendarLink;
            for (var i = 0, max = moveCalendarLink.length; i < max; i++) {
                var target = moveCalendarLink.eq(i),
                    targetData = target.data(this.opts.dataLinkDateName);
                if ((targetData.year == this.todayYear) && (targetData.month == this.todayMonth) && (targetData.date == this.todayDate)) {
                    target.parent().addClass(this.opts.calTodayClass);
                }
            }
        },
        useageCssBuild : function () {
            this.useageChoiceCssBuild();
            this.useageRangeCssBuild();
            this.useageRestCssBuild();
        },
        useageChoiceCssBuild : function () {
            var moveCalendarLink = this.moveCalendarLink;
            for (var i = 0, max = moveCalendarLink.length; i < max; i++) {
                var target = moveCalendarLink.eq(i),
                    targetData = target.data(this.opts.dataLinkDateName);
                if ((targetData.year == this.opts.choiceYear) && (targetData.month == this.opts.choiceMonth) && (targetData.date == this.opts.choiceDate)) {
                    target.parent().addClass(this.opts.calActiveClass);
                    if (this.dayClickType) {
                        this.dayClickType = false;
                        target.focus();
                    }
                }
            }
        },
        useageRangeCssBuild : function () {
            if (!this.opts.range && !this.opts.dragRange) return;
            var moveCalendarLink = this.moveCalendarLink;
            if (this.opts.rangeFromDate && this.opts.rangeToDate) {
                for (var i = 0, max = moveCalendarLink.length; i < max; i++) {
                    var target = moveCalendarLink.eq(i),
                        targetData = target.data(this.opts.dataLinkDateName),
                        rangeType = this.rangeCompare(this.opts.rangeFromDate, targetData.fullDate, this.opts.rangeToDate);
                    target.parent().toggleClass(this.opts.calActiveClass, rangeType);
                }
            }
        },
        // 공휴일
        useageRestCssBuild : function () {
            var moveCalendarLink = this.moveCalendarLink,
                restArrays = this.opts.restDays;
            if (!restArrays.length) return;
            for (var i = 0, max = restArrays.length; i < max; i++) {
                var restObj = restArrays[i],
                    restYear = restObj.year,
                    restDetails = restObj.detail;
                if (restYear == this.opts.moveYear) {
                    for (var j = 0, jmax = restDetails.length; j < jmax; j++) {
                        var detailObj = restDetails[j],
                            restMonth = detailObj.month,
                            restDays = detailObj.day;
                        if (restMonth == this.opts.moveMonth) {
                            for (var k = 0, kmax = restDays.length; k < kmax; k++) {
                                var restDay = restDays[k];
                                for (var a = 0, amax = moveCalendarLink.length; a < amax; a++) {
                                    var target = moveCalendarLink.eq(a),
                                        targetData = target.data(this.opts.dataLinkDateName);
                                    if (targetData.date == restDay) {
                                        target.parent().addClass(this.opts.calRestClass);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        dateStringBuild : function (year, month, date) {
            var formatLine = this.opts.dateFormat,
                formatArrays = formatLine.split(this.opts.middleText),
                dateArrays = [],
                buildString = '';
            for (var i = 0, max = formatArrays.length; i < max; i++) {
                if (formatArrays[i] == 'yy') {
                    dateArrays[i] = year;
                } else if (formatArrays[i] == 'mm') {
                    dateArrays[i] = this.opts.monthText[month - 1];
                } else if (formatArrays[i] == 'dd') {
                    dateArrays[i] = this.opts.dayText[date - 1];
                }
            }
            for (var j = 0, jmax = dateArrays.length; j < jmax; j++) {
                if ((dateArrays[j] == undefined) || (dateArrays[j] == null)) {
                    dateArrays.splice(j, 1);
                }
            }
            buildString = dateArrays.join(this.opts.middleText);
            return buildString;
        },
        dateObjectBuild : function (date) {
            var formatLine = this.opts.dateFormat,
                formatArrays = formatLine.split(this.opts.middleText),
                dateArrays = date.split(this.opts.middleText),
                dateObj = {};
            for (var i = 0, max = formatArrays.length; i < max; i++) {
                if (formatArrays[i] == 'yy') {
                    dateObj.year = parseInt(dateArrays[i], 10);
                } else if (formatArrays[i] == 'mm') {
                    dateObj.month = parseInt(dateArrays[i], 10);
                } else if (formatArrays[i] == 'dd') {
                    dateObj.date = parseInt(dateArrays[i], 10);
                }
            }
            return dateObj;
        },
        outCallback : function (ing) {
            var callbackObj = this.opts[ing];
            this.emit(ing, arguments[1], arguments[2]);
            if (callbackObj == null) return;
            callbackObj(arguments[1], arguments[2]);
        },
        subscribers : {},
        on : function (event, cb, context) {
            this.subscribers[event] = this.subscribers[event] || [];
            this.subscribers[event].push({
                callback : cb,
                context : context
            });
        },
        off : function (event, cb, context) {
            var idx, subs = this.subscribers[event], sub;
            if (subs) {
                idx = subs.length - 1;
                while (idx >= 0) {
                    sub = subs[idx];
                    if ((sub.callback === cb) && (!context || sub.context === context)) {
                        subs.splice(idx, 1);
                        break;
                    }
                    idx--;
                }
            }
        },
        emit : function (event) {
            var subs = this.subscribers[event], idx = 0, args = Array.prototype.slice.call(arguments, 1), sub;
            if (subs) {
                while (idx < subs.length) {
                    sub = subs[idx];
                    sub.callback.apply(sub.context || this, args);
                    idx++;
                }
            }
        }
    };
    $.fn[pluginName] = function (args) {
        var _this = this;
        for (var i = 0, max = this.length; i < max; i++) {
            (function (index) {
                new win[pluginName](_this.eq(index), args);
            })(i);
        }
    };
})(window, window.jQuery, window.document);