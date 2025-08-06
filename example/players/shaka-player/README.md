# 🎬 Shaka Player Demo UI

고급 **Shaka Player 4.x** 기능(ABR · DRM · 오프라인 · 통계 · 네트워크 시뮬레이션 등)을 한 페이지에서 체험하고 튜닝할 수 있는 데모입니다.

> **스택**: 순수 HTML + Vanilla ES6 JavaScript (빌드 도구 불필요)

---

## 📂 파일 구조

```
/project-root
├── index.html       # UI · 스타일 · 가이드 배너
├── main.js          # ES6 소스
├── main.min.js      # UglifyJS 3 압축본 (선택)
└── poster.webp      # 비디오 포스터 (선택)
```

---

## ⚙️ 빠른 시작

1. `index.html` 더블클릭 → 브라우저에서 열기  
2. 노란 *빠른 사용 가이드* 대로  
   ① 영상 선택 → ② 영상 로드 → ③ ▶︎ 재생  
3. 우측 패널에서 화질 · 버퍼 · 네트워크를 바꿔 반응 확인

---

## 🧑‍💻 JavaScript 가이드

### 1. 전체 아키텍처

```
main.js
├─ 전역 상수 · 변수 (플레이어 · 통계 · 히스토리)
├─ initializePlayer()              # Shaka Player 인스턴스 및 UI Overlay
│  └─ setupEventListeners()
│  └─ logEvent()                   # 모든 이벤트 중앙 로깅
├─ loadSelectedVideo()             # 영상 로드 & DRM 자동 감지 · 설정
│  └─ detectDRMFromManifest()
│  └─ configureDRMByType()
├─ 실시간 컨트롤 함수
│  ├─ setABREnabled()
│  ├─ setBufferSize()
│  ├─ setBandwidthLimit() / resetBandwidth()
│  └─ enableLowLatency()
├─ 모니터링
│  ├─ startStatsMonitoring() → updateStats()
│  ├─ updateVisualIndicators()
│  └─ drawBandwidthChart()
├─ 오프라인 스토리지
│  ├─ downloadForOffline()
│  ├─ listOfflineContent()
│  ├─ removeOfflineContent()
│  └─ clearAllOfflineContent()
└─ 유틸리티 (formatTime 등)
```

---

### 2. 전역 변수 🗄️

| 변수             | 설명                                      |
|------------------|-------------------------------------------|
| `player`         | `new shaka.Player()` 인스턴스            |
| `ui`             | Shaka UI Overlay                          |
| `statsInterval`  | 1초 간격 통계 타이머                     |
| `bandwidthHistory` | 최근 50개 추정 대역폭(kbps)             |
| `logCounts`      | `{info, warn, error}` 로그 개수          |
| `eventHistory`   | 최근 60초간 이벤트 히스토리              |

---

### 3. 이벤트 흐름 📡

1. **initializePlayer**  
   → `setupEventListeners()`에서  
   **error / adaptation / buffering / loaded / stalldetected / livechanged** 등 바인딩  
2. 각 이벤트 발생 시 **logEvent()** 호출  
   - DOM 로그 추가 + 통계 · 차트 즉시 갱신  
   - 스톨링 · 화질변경 · 로드지연 등 특수 패턴은 별도 카운터 업데이트  
3. 1초마다 **updateStats()** 실행 → 버퍼 · 대역폭 · DRM 상태 등 계산 후 UI 반영

---

### 4. 핵심 API 사용법 🔑

| 함수 | 실무 팁 |
|------|---------|
| `player.load(mpd)` | 비동기 → `await` 필수. 실패 시 `error.code`로 DRM / 네트워크 구분 |
| `player.configure({...})` | ABR · streaming · manifest · drm 등 중첩 설정 가능. 최소 diff 설정만 적용 |
| `player.selectVariantTrack(track, /* clearBuffer */ true)` | 수동 화질 전환 시 버퍼 flush 여부 지정 가능 |
| `new shaka.offline.Storage(player)` | 동일 `player` 공유 → 온라인 재생 ↔ 오프라인 관리 API 호환 |

---

### 5. 확장 포인트 🛠️

| 작업 | 수정 위치 |
|------|-----------|
| 테스트 영상 추가 | `TEST_VIDEOS` 객체에 `key: 'manifest.mpd'` 추가 |
| 추가 DRM 서버 | `configureDRMByType()` 내부 DRM URL |
| EMSG · Timed Metadata 처리 | `setupEventListeners()` → `player.addEventListener('timelineregionadded', …)` |
| P2P · 머신러닝 기반 ABR 교체 | `setABREnabled()` → `player.configure({ abr: { ... } })` 부분에 커스텀 ABR Manager 지정 |

---

### 6. 빌드 & Minify ⚡

ES6 이므로 **UglifyJS 3+** 사용 권장:

```bash
npm i -g uglify-js  # v3 이상 설치
uglifyjs main.js -o main.min.js -c -m
```

> 큰 파일은 `--source-map` 옵션으로 디버깅용 맵 생성 가능

---

### 7. 문제 해결 🩹

| 증상 | 체크 목록 |
|------|-----------|
| **영상 X or CORS** | 로컬 파일로 직접 열면 CORS 차단됨. `python -m http.server` 등 로컬 서버 사용 |
| **Widevine DRM 재생 실패** | Chrome 필수, 시크릿 모드에서는 확장 · 쿠키 문제 확인 |
| **통계 ‘준비 중’ 고정** | CDN 로드 실패 또는 `player.load()` 미호출 여부 확인 |

---

## 📝 라이선스

- Demo UI 코드: **MIT**  
- Shaka Player: **Apache-2.0**  
- 샘플 영상은 각 소유자 라이선스에 따름
