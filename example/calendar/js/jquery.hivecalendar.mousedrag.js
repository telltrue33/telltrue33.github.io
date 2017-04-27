(function (win, $, doc) {
    'use strict';
    win.examProject = win.examProject || {};
    win.examProject.common = win.examProject.common || {};

    var UTIL = win.examProject.common.util;

    win.examProject.calendarDate = (function () {
        var date = new Date(),
            dateObj = {
                getFullYear : date.getFullYear(),
                getMonth : date.getMonth() + 1,
                getDate : date.getDate()
            };
        return dateObj; 
    })();
    win.examProject.hiveCalendar = function (container, args) {
        var defParams = {
            dateWrapClass : 'js-datetable',
            btnWrapClass : 'js-options',
            btnPrevYearClass : 'js-prev-year',
            btnPrevMonthClass : 'js-prev-month',
            btnNextMonthClass : 'js-next-month',
            btnNextYearClass : 'js-next-year',
            btnTodayMonthClass : 'js-today-month',
            btnCloseClass : 'js-cal-close',
            calActiveClass : 'on',
            calTodayClass : 'ck_today',
            calRestClass : 'special',
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
        this.opts = $.extend({}, defParams, (args || {}));
        if (!(this.obj = $(container)).length) return;
        this.init();
    };
    win.examProject.hiveCalendar.prototype = {
        init : function () {
            this.initOpts();
            this.initLayout();
        },
        initOpts : function () {
            var date = win.examProject.calendarDate,
                iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
            this.opts.moveYear = this.todayYear = date.getFullYear;
            this.opts.moveMonth = this.todayMonth = date.getMonth;
            this.opts.moveDate = this.todayDate = date.getDate;
            this.opts.choiceFullDate = null;
            this.onSelect = this.opts.onSelect;
            if (UTIL.isDevice && this.opts.dragRange) {
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
        bindEvents : function () {
            this.btnPrevYear.on('click', $.proxy(this.onPrevYear, this));
            this.btnPrevMonth.on('click', $.proxy(this.onPrevMonth, this));
            this.btnNextMonth.on('click', $.proxy(this.onNextMonth, this));
            this.btnNextYear.on('click', $.proxy(this.onNextYear, this));
            this.btnCurrentMonth.on('click', $.proxy(this.onCurrentMonth, this));
            this.btnCalClose.on('click', $.proxy(this.onCalClose, this));
            this.objCalendar.on('click', 'a', $.proxy(this.onClickDay, this));
            this.objCalendar.on('keydown', 'a', $.proxy(this.onKeyDownDay, this));
            if (this.opts.mousewheelControl) {
                this.objCalendar.on('mousewheel', $.proxy(this.mouseWheelFunc, this));
            }
        },
        onPrevYear : function () {
            this.opts.moveYear = this.opts.moveYear - 1;
            this.rangeBuild();
            this.createCalendar();
        },
        onPrevMonth : function () {
            this.opts.moveMonth = this.opts.moveMonth - 1;
            if (this.opts.moveMonth <= 0) {
                this.opts.moveYear = this.opts.moveYear - 1;
                this.opts.moveMonth = 12;
            }
            this.rangeBuild();
            this.createCalendar();
        },
        onNextMonth : function () {
            this.opts.moveMonth = this.opts.moveMonth + 1;
            if (this.opts.moveMonth > 12) {
                this.opts.moveYear = this.opts.moveYear + 1;
                this.opts.moveMonth = 1;
            }
            this.rangeBuild();
            this.createCalendar();
        },
        onNextYear : function () {
            this.opts.moveYear = this.opts.moveYear + 1;
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
                    this.outCallback(this.opts.choiceFullDate);
                }
            }
        },
        onKeyDownDay : function (e) {
            var target = $(e.currentTarget),
                moveCalendarLinks = this.moveCalendarLink,
                targetIndex = moveCalendarLinks.index(target),
                keyCode = e.which || e.keyCode,
                moveIndex = targetIndex;
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
                if (moveIndex >= moveCalendarLinks.length) {
                    moveIndex = moveCalendarLinks.length;
                }
            } else if (keyCode === 40) {
                e.preventDefault();
                moveIndex = moveIndex + 7;
                if (moveIndex >= moveCalendarLinks.length) {
                    moveIndex = targetIndex;
                }
            }
            if ((keyCode === 37) || (keyCode === 38) || (keyCode === 39) || (keyCode === 40)) {
                moveCalendarLinks.eq(moveIndex).focus();
            }
        },
        rangeEndFunc : function () {
            var sortArrays = [this.opts.rangeFromDate, this.opts.rangeToDate],
                sortArrays = sortArrays.sort(),
                fromData = sortArrays[0].split(this.opts.middleText),
                toData = sortArrays[1].split(this.opts.middleText),
                dataObj = {
                    fromDate : this.dateStringBuild(fromData[0], fromData[1], fromData[2]),
                    toDate : this.dateStringBuild(toData[0], toData[1], toData[2])
                };
            this.opts.rangeFromObject = this.dateObjectBuild(dataObj.fromDate);
            this.opts.rangeToObject = this.dateObjectBuild(dataObj.toDate);
            this.outCallback(dataObj);
        },
        rangeCompare : function (startDate, inDate, endDate) {
            var sortArrays = [startDate, inDate, endDate],
                sortArrays = sortArrays.sort();
            if (sortArrays[1] === inDate) {
                return true;
            } else {
                return false;
            }
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
            layoutOptions.push('<div class="' + this.opts.btnWrapClass + '">');
            layoutOptions.push('<button type="button" class="' + this.opts.btnPrevYearClass + '">' + this.opts.prevYearText + '</button>');
            layoutOptions.push('<button type="button" class="' + this.opts.btnPrevMonthClass + '">' + this.opts.prevMonthText + '</button>');
            layoutOptions.push('<button type="button" class="' + this.opts.btnNextMonthClass + '">' + this.opts.nextMonthText + '</button>');
            layoutOptions.push('<button type="button" class="' + this.opts.btnNextYearClass + '">' + this.opts.nextYearText + '</button>');
            layoutOptions.push('</div>');
            layoutOptions.push('<div class="' + this.opts.dateWrapClass + '">');
            layoutOptions.push('</div>');
            layoutOptions.push('<div class="' + this.opts.btnWrapClass + '">');
            layoutOptions.push('<button type="button" class="' + this.opts.btnTodayMonthClass + '">' + this.opts.todayMonthText + '</button>');
            layoutOptions.push('<button type="button" class="' + this.opts.btnCloseClass + '">' + this.opts.closeText + '</button>');
            layoutOptions.push('</div>');
            this.obj.get(0).innerHTML = layoutOptions.join('');
        },
        createElements : function () {
            this.btnWrap = this.obj.find('.' + this.opts.btnWrapClass);
            this.btnPrevYear = this.btnWrap.find('.' + this.opts.btnPrevYearClass);
            this.btnPrevMonth = this.btnWrap.find('.' + this.opts.btnPrevMonthClass);
            this.btnNextMonth = this.btnWrap.find('.' + this.opts.btnNextMonthClass);
            this.btnNextYear = this.btnWrap.find('.' + this.opts.btnNextYearClass);
            this.btnCurrentMonth = this.btnWrap.find('.' + this.opts.btnTodayMonthClass);
            this.btnCalClose = this.btnWrap.find('.' + this.opts.btnCloseClass);
            this.objCalendar = this.obj.find('.' + this.opts.dateWrapClass);
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
            var tdPush = function (wday) {
                var returnPush = '';
                if (wday === 0) {
                    returnPush = layoutCalendar.push('<td class="sun">');
                } else if (wday === 6) {
                    returnPush = layoutCalendar.push('<td class="sat">');
                } else {
                    returnPush = layoutCalendar.push('<td>');
                }
                return returnPush;
            };
            if ((this.opts.moveMonth - 1) == 2) {
                daysCurrentMonth = 31;
            }
            layoutCalendar.push('<div class="info">' + this.dateStringBuild(this.opts.moveYear, this.opts.moveMonth) + '</div>');
            layoutCalendar.push('<div class="layout">');
            layoutCalendar.push('<table>');
            layoutCalendar.push('<caption>' + this.opts.captionText + '</caption>');
            layoutCalendar.push('<thead>');
            layoutCalendar.push('<tr>');
            for (var th_day = 0, max_th_day = 7; th_day < max_th_day; th_day++) {
                if (th_day === 0) {
                    layoutCalendar.push('<th class="sun">');
                } else if (th_day === 6) {
                    layoutCalendar.push('<th class="sat">');
                } else {
                    layoutCalendar.push('<th>');
                }
                layoutCalendar.push(this.opts.weekText[th_day]);
                layoutCalendar.push('</th>');
            }
            layoutCalendar.push('</tr>');
            layoutCalendar.push('</thead>');
            layoutCalendar.push('<tbody>');
            if (weekFirstDay !== 0) {
                layoutCalendar.push('<tr>');
            }
            var prevDay = daysPrevMonth - (weekFirstDay - 1);
            for (var max_day = weekFirstDay; week_day < max_day; week_day++) {
                tdPush(week_day);
                layoutCalendar.push('<span>' + prevDay + '</span>');
                layoutCalendar.push('</td>');
                prevDay++;
            }
            week_day = weekFirstDay;
            var mm = currentMonth.getMonth(),
                mm = (mm == 0) ? 12 : mm;
            for (var day_counter = 1; day_counter <= daysCurrentMonth; day_counter++) {
                week_day %= 7;
                if (week_day == 0) {
                    layoutCalendar.push('</tr><tr>');
                }
                tdPush(week_day);
                if ((this.opts.moveYear == this.opts.rangeMinYear) && (this.opts.moveMonth == this.opts.rangeMinMonth) && (day_counter < this.opts.rangeMinDate)) {
                    layoutCalendar.push('<span>' + day_counter + '</span>');
                } else if ((this.opts.moveYear == this.opts.rangeMaxYear) && (this.opts.moveMonth == this.opts.rangeMaxMonth) && (day_counter > this.opts.rangeMaxDate)) {
                    layoutCalendar.push('<span>' + day_counter + '</span>');
                } else {
                    if (this.opts.dragRange) {
                        layoutCalendar.push('<a tabindex="0">' + day_counter + '</a>');
                    } else {
                        layoutCalendar.push('<a href ="' + day_counter + '">' + day_counter + '</a>');
                    }
                }
                layoutCalendar.push('</td>');
                week_day++;
            }
            var nextDay = 1;
            for (week_day = week_day; week_day < 7; week_day++) {
                tdPush(week_day);
                layoutCalendar.push('<span>' + nextDay + '</span>');
                layoutCalendar.push('</td>');
                nextDay++;
            }
            layoutCalendar.push('</tr>');
            layoutCalendar.push('</tbody>');
            layoutCalendar.push('</table>');
            layoutCalendar.push('</div>');
            this.objCalendar.get(0).innerHTML = layoutCalendar.join('');
            this.createDataBuild();
            this.createCssBuild();
            this.useageCssBuild();
            if (this.opts.dragRange) {
                if (!this.dragCalendar) {
                    this.dragCalendar = new win.examProject.dragCalendar(this);
                } else {
                    this.dragCalendar.init(this);
                }
            }
        },
        createDataBuild : function () {
            var _this = this;
            this.moveCalendarLink = this.objCalendar.find('a').filter(function () {
                var target = $(this),
                    dataObj = {
                        year : _this.opts.moveYear,
                        month : _this.opts.moveMonth,
                        date : parseInt(target.text()),
                        fullDate : _this.opts.moveYear + _this.opts.middleText + 
                            _this.opts.monthText[_this.opts.moveMonth - 1] + _this.opts.middleText + 
                            _this.opts.dayText[target.text() - 1]
                    };
                target.data(_this.opts.dataLinkDateName, dataObj);
                return true;
            });
        },
        createCssBuild : function () {
            var moveCalendarTd = this.objCalendar.find('td'),
                linkTarget = moveCalendarTd.find('a');
            for (var i = 0, max = linkTarget.length; i < max; i++) {
                var target = linkTarget.eq(i),
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
            var moveCalendarTd = this.objCalendar.find('td'),
                linkTarget = moveCalendarTd.find('a');
            for (var i = 0, max = linkTarget.length; i < max; i++) {
                var target = linkTarget.eq(i),
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
            var moveCalendarTd = this.objCalendar.find('td'),
                linkTarget = moveCalendarTd.find('a');
            if (this.opts.rangeFromDate && this.opts.rangeToDate) {
                for (var i = 0, max = linkTarget.length; i < max; i++) {
                    var target = linkTarget.eq(i),
                        targetData = target.data(this.opts.dataLinkDateName),
                        rangeType = this.rangeCompare(this.opts.rangeFromDate, targetData.fullDate, this.opts.rangeToDate);
                    if (rangeType) {
                        target.parent().addClass(this.opts.calActiveClass);
                    } else {
                        target.parent().removeClass(this.opts.calActiveClass);
                    }
                }
            }
        },
        // 공휴일
        useageRestCssBuild : function () {
            var moveCalendarTd = this.objCalendar.find('td'),
                linkTarget = moveCalendarTd.find('a'),
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
                                for (var a = 0, amax = linkTarget.length; a < amax; a++) {
                                    var target = linkTarget.eq(a),
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
                    dateObj.year = parseInt(dateArrays[i]);
                } else if (formatArrays[i] == 'mm') {
                    dateObj.month = parseInt(dateArrays[i]);
                } else if (formatArrays[i] == 'dd') {
                    dateObj.date = parseInt(dateArrays[i]);
                }
            }
            return dateObj;
        },
        mouseWheelFunc : function (e) {
            e.preventDefault();
            if (e.deltaY < 0) {
                 this.btnNextMonth.triggerHandler('click');
            } else {
                 this.btnPrevMonth.triggerHandler('click');
            }
        },
        outCallback : function (selectDate) {
            if (this.onSelect !== null) {
                this.onSelect(selectDate, this);
            }
        }
    };

    win.examProject.dragCalendar = function (_parent) {
        var defParams = {
            customEvent : '.dragrange' + (new Date()).getTime()
        };
        this.opts = $.extend({}, defParams, (_parent.opts || {}));
        this.parent = _parent;
        this.init();
    };
    win.examProject.dragCalendar.prototype = {
        init : function (_parent) {
            if (_parent) {
                this.opts.moveYear = _parent.opts.moveYear;
                this.opts.moveMonth = _parent.opts.moveMonth;
            }
            this.setElements();
            this.bindEvents();
            this.parent.useageRangeCssBuild();
        },
        setElements : function () {
            this.objCalendar = this.parent.objCalendar;
            this.objTd = this.objCalendar.find('td').filter(function () {
                var target = $(this);
                if (!target.find('a').length) return false;
                return true;
            });
        },
        bindEvents : function () {
            this.objTd.off('keydown' + this.opts.customEvent);
            this.objTd.off('keyup' + this.opts.customEvent);
            this.objTd.off('mousedown' + this.opts.customEvent);
            this.objTd.off('mouseup' + this.opts.customEvent);
            this.objTd.off('mouseenter' + this.opts.customEvent + ' focusin' + this.opts.customEvent);
            $(doc).off('mouseup' + this.opts.customEvent);
            this.objTd.on('keydown' + this.opts.customEvent, 'a', $.proxy(this.onKeyDownFunc, this));
            this.objTd.on('keyup' + this.opts.customEvent, 'a', $.proxy(this.onKeyUpFunc, this));
            this.objTd.on('mousedown' + this.opts.customEvent, $.proxy(this.objMouseDownFunc, this));
            this.objTd.on('mouseup' + this.opts.customEvent, $.proxy(this.objMouseUpFunc, this));
            this.objTd.on('mouseenter' + this.opts.customEvent + ' focusin' + this.opts.customEvent, $.proxy(this.tdOverOutControl, this));
            $(doc).on('mouseup' + this.opts.customEvent, $.proxy(this.docMouseUpFunc, this));
        },
        onKeyDownFunc : function (e) {
            var keyCode = e.which || e.keyCode,
                target = $(e.currentTarget).parent(),
                objTd = this.objTd,
                targetWhichIndex = objTd.index(target),
                moveIndex = targetWhichIndex;
            if (keyCode === 13) {
                if (this.enterDown) {
                    this.enterDown = false;
                    target.triggerHandler('mouseup' + this.opts.customEvent);
                } else {
                    this.enterDown = true;
                    target.triggerHandler('mousedown' + this.opts.customEvent);
                    target.triggerHandler('mouseenter' + this.opts.customEvent);
                }
            } else if (keyCode === 9) {
                if (this.enterDown) {
                    if (this.shiftDown) {
                        moveIndex = moveIndex - 1;
                    } else {
                        moveIndex = moveIndex + 1;
                    }
                    objTd.eq(moveIndex).triggerHandler('mouseenter' + this.opts.customEvent);
                }
            } else if (keyCode === 16) {
                if (this.enterDown) {
                    this.shiftDown = true;
                }
            } else if (keyCode === 37) {
                e.preventDefault();
                moveIndex = moveIndex - 1;
                if (moveIndex <= 0) {
                    moveIndex = 0;
                }
            } else if (keyCode === 38) {
                e.preventDefault();
                moveIndex = moveIndex - 7;
                if (moveIndex < 0) {
                    moveIndex = targetWhichIndex;
                }
            } else if (keyCode === 39) {
                e.preventDefault();
                moveIndex = moveIndex + 1;
                if (moveIndex >= objTd.length) {
                    moveIndex = objTd.length;
                }
            } else if (keyCode === 40) {
                e.preventDefault();
                moveIndex = moveIndex + 7;
                if (moveIndex >= objTd.length) {
                    moveIndex = targetWhichIndex;
                }
            }
            if ((keyCode === 37) || (keyCode === 38) || (keyCode === 39) || (keyCode === 40)) {
                objTd.eq(moveIndex).triggerHandler('mouseenter' + this.opts.customEvent);
            }
        },
        onKeyUpFunc : function (e) {
            var keyCode = e.which || e.keyCode,
                target = $(e.currentTarget).parent();
            if (this.enterDown) {
                if (keyCode === 16) {
                    this.shiftDown = false;
                }
            }
        },
        tdOverOutControl : function (e) {
            e.stopPropagation();
            if (!this.objDown) return;
            var target = $(e.currentTarget);
            this.tdOverOutView(target);
        },
        tdOverOutView : function (target) {
            var target = target.find('a'),
                targetData = target.data(this.opts.dataLinkDateName).fullDate,
                linkTarget = this.objTd.find('a');
            for (var i = 0, max = linkTarget.length; i < max; i++) {
                var targets = linkTarget.eq(i),
                    targetsData = targets.data(this.opts.dataLinkDateName).fullDate,
                    rangeType = this.parent.rangeCompare(this.parent.opts.rangeFromDate, targetsData, targetData);
                if (rangeType) {
                    targets.parent().addClass(this.opts.calActiveClass);
                    this.parent.opts.rangeToDate = targetData;
                } else {
                    targets.parent().removeClass(this.opts.calActiveClass);
                }
            }
        },
        objMouseDownFunc : function (e) {
            e.preventDefault();
            e.stopPropagation();
            var target = $(e.currentTarget),
                targetDate = target.find('a').data(this.opts.dataLinkDateName);
            if (this.objDown) return;
            this.objDown = true;
            this.parent.opts.rangeFromDate = targetDate.fullDate;
            target.triggerHandler('mouseenter');
            target.find('a').focus();
        },
        objMouseUpFunc : function (e) {
            e.stopPropagation();
            var target = $(e.currentTarget);
            if (!this.objDown) return;
            this.objDown = false;
            target.find('a').focus();
            this.parent.rangeEndFunc();
        },
        docMouseUpFunc : function (e) {
            if (!this.objDown) return;
            this.objDown = false;
            this.parent.rangeEndFunc();
        }
    }
})(window, window.jQuery, window.document);
