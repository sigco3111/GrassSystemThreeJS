# 🪨 GrassSystemThreeJS — 토양 스튜디오 (한국어 한글판)

**Three.js + GLSL 셰이더** 기반의 **절차적 토양 샌드박스** 입니다. 변위된 지면 평면 하나가 GPU 에서 완전한 언덕 / 균열 / 이끼 / 바람 잔디 지형으로 재구성되며, 시네마틱 후처리 (볼류메트릭 구름, 피사계 심도, 블룸, 필름 그레이드) 로 마무리됩니다. 모든 것이 GUI 에서 실시간으로 제어됩니다.

> ⚠️ 저장소 이름은 `GrassSystemThreeJS` 이지만, 실제로는 풀 토양 / 지형 스튜디오로 성장했습니다 — 토양 / 이끼 / 잔디 / 모델 / 날씨 / 카메라가 한 씬에 모두 들어있습니다.

---

## 🔗 링크

| 항목 | URL |
|---|---|
| 🌐 **라이브 데모** | **<https://grasssystemthreejs.vercel.app>** |
| 📦 **이 저장소 (한국어 fork)** | <https://github.com/sigco3111/GrassSystemThreeJS> |
| ⭐ **원본 저장소 (출처)** | <https://github.com/achrefelouafi/GrassSystemThreeJS> |

> 본 저장소는 [achrefelouafi/GrassSystemThreeJS](https://github.com/achrefelouafi/GrassSystemThreeJS) 의 **한국어 fork** 입니다. 원본의 모든 핵심 코드(절차적 토양 + GPU 인스턴싱 잔디 + 이끼 + 볼류메트릭 구름 + 시네마틱)와 라이선스(MIT)를 그대로 보존하면서 사용자 인터페이스만 한글로 번역·개선했습니다.

---

## ✨ 라이브 데모 둘러보기

브라우저에서 **<https://grasssystemthreejs.vercel.app>** 을 열면 즉시 절차적 토양 스튜디오를 만날 수 있습니다.

**조작 방법**

- 🖱️ **드래그** — 카메라 궤도 회전
- 🖲️ **스크롤** — 줌 인/아웃
- 🎛️ **우측 상단 GUI** — 머티리얼 / 토양 표면 / 이끼 / 모델 / 잔디 / 바람 / 조명 / 구름 / 시네마틱 17개 폴더 100+ 매개변수 실시간 조절
- 🌿 **이끼 / 잔디 토글** — 기본 OFF (성능 보호), GUI 에서 켜기
- 🚗 **모델 추가** — Rusty Car / Porsche 911 내장 또는 자체 .glb 임포트
- 🎲 **시드 무작위화** — 각 노이즈 필드의 🎲 버튼으로 새로운 패턴 생성

**7가지 핵심 기능**

| 기능 | 설명 |
|---|---|
| 🪨 **절차적 토양** | 공유 월드 노이즈 필드로 넓은 언덕 + 미세 기복 생성 |
| 🕳️ **마른 균열** | 워플된 셀룰러 (Worley) 판상 네트워크로 햇볕에 그을린 균열 (실제 노멀 홈) |
| 🌿 **이끼 커버** | FBM 범위 마스크 + PBR 텍스처 + 높이 볼륨으로 살아있는 카펫 생성 |
| 🌱 **GPU 인스턴싱 잔디** | 단일 draw call, 정점 셰이더에서 위치 / 컬 / 바람 애니메이션 |
| 🍃 **바람 필드** | 월드 공간 gust 흐름 + 잎별 flutter, 강도/속도/방향/gust 크기 |
| ☁️ **볼류메트릭 구름** | 박스 제한 레이마치 + 자체 그림자 + Henyey–Greenstein 역광 |
| 🎬 **시네마틱** | DoF (포커스 평면 표시) + Unreal bloom + Letterbox + 후처리 풀 스택 |

---

## 📑 목차

1. [한국어판 추가 사항](#-한국어판-추가-사항)
2. [주요 기능 (Features)](#-주요-기능-features)
3. [빠른 시작 (Run)](#-빠른-시작-run)
4. [조작 방법 (Controls)](#-조작-방법-controls)
5. [프로젝트 구조 (Architecture)](#-프로젝트-구조-architecture)
6. [한국어화 작업 노트](#-한국어화-작업-노트)
7. [원본 저장소 및 크레딧](#-원본-저장소-및-크레딧)
8. [라이선스](#-라이선스)

---

## 🎌 한국어판 추가 사항

> sigco3111 본 fork에서만 제공하는 한국어 사용자를 위한 개선 사항입니다.

- **🈶 완전 한글 GUI** — 우측 상단 lil-gui 패널의 폴더 17개, 컨트롤 100+, 6가지 시드 무작위화 버튼 모두 자연스러운 한국어로 번역
- **🈶 한글 부트 화면** — `<html lang="ko">`, "토양 스튜디오 (한글판)"
- **🈶 한글 안내문** — 좌하단 "토양 스튜디오 · 드래그로 궤도 회전 · 스크롤로 줌 · 지면 조각하기"
- **🔄 이중 언어 지원** — `src/i18n.js` 모듈로 한국어 / 영어 토글 가능
- **🛡️ 식별자 침투 0건** — Three.js 객체 / 셰이더 유니폼 / GLB 키 모두 원본 그대로 보존
- **✅ Vite 빌드 통과** — 750KB / 194KB gzip
- **🚀 Vercel 프로덕션 배포** — `<https://grasssystemthreejs.vercel.app>`

### 한국어화 번역 매핑 예시 (대표 항목)

| 원본 (영문) | 한국어판 |
|---|---|
| 🪨 Soil Studio | 토양 스튜디오 |
| Material | 머티리얼 |
| Soil Surface | 토양 표면 |
| Mounds & Relief | 언덕과 기복 |
| Tone & Color | 톤과 색상 |
| Moisture | 수분 |
| Dry Cracks | 마른 균열 |
| 🌿 Moss Cover | 이끼 |
| Coverage Mask | 범위 마스크 |
| Height Volume | 높이 볼륨 |
| Texture & Shading | 텍스처와 셰이딩 |
| 🚗 Model | 모델 |
| Moss Accumulation | 이끼 누적 |
| 🌱 Grass | 잔디 |
| 🍃 Wind | 바람 |
| Lighting | 조명 |
| ☁️ Clouds | 구름 |
| Shape / Motion / Lighting & Color / Quality | 모양 / 움직임 / 조명과 색상 / 품질 |
| 🎬 Cinematic | 시네마틱 |
| Camera / Depth of Field / Effects | 카메라 / 피사계 심도 / 효과 |
| Enabled | 켜기 |
| Coverage | 범위 |
| Mask Scale / Patch Scale | 마스크 스케일 / 패치 스케일 |
| Edge Softness | 가장자리 |
| Seed X / Y | 시드 X / Y |
| Randomize Seed | 시드 무작위화 |
| Bloom / Film Grain / Vignette | 블룸 / 필름 그레인 / 비네트 |
| Chromatic Aberration | 색수차 |
| Letterbox | 레터박스 |

---

## 🏗️ 주요 기능 (Features)

### 🪨 절차적 토양 (Procedural Soil)

단일 변위 지면 평면이 GPU 에서 완전한 지형으로 재구성:

- **공유 월드 노이즈 필드** — 넓은 언덕 (broad mounds) + 미세 기복 (fine relief)
- **톤 변화** — 마른/풍부한 색조 변화
- **수분 패치** — 어둡고 광택있는 (darken + gloss) 습윤 영역
- **마른 균열** — 워플된 셀룰러 (Worley) 판상 네트워크가 **실제 노멀 홈**을 만듦 (평면 데칼 아님)
- **모든 컨트롤 실시간** — 스케일, 범위, 가장자리, 시드 모두 라이브 조절

### 🌿 이끼 커버 (Moss Cover)

- **FBM 범위 마스크** — 이끼가 어디에 자랄지 결정
- **PBR 텍스처** — Color / Roughness / Normal / AO
- **높이 볼륨** — 이끼가 지오메트리를 들어올려 **살아있는 카펫** 생성
- **마스크 스케일 / 얼룩 정도** — FBM 밀도 / 패치성 조절
- **포자 / 반짝임** — 추가 시각 효과

### 🌱 GPU 인스턴싱 잔디 (GPU-Instanced Grass)

- **단일 draw call** — 전체 필드가 한 번에 그려짐
- **정점 셰이더**에서 위치, 컬, 바람 애니메이션
- **지형 높이장**에 부착 — 언덕 / 이끼 따라 자람
- **커스텀 컨트롤** — 블레이드 키 / 너비 / 컬 / 베이스+팁 색상 / 색상 변화 / 투명도

### 🍃 바람 (Wind)

- **월드 공간 gust 흐름** — 일관된 바람 패턴
- **잎별 flutter** — 디튠 난류 진동
- **컨트롤** — 강도 / 속도 / 방향 (°) / gust 크기 / flutter

### ☁️ 볼류메트릭 구름 (Volumetric Clouds)

`src/clouds.js` 의 풀 레이마치:
- **박스 제한 레이마치** — 카메라 따라가는 슬랩
- **자체 그림자** — 5-탭 지수 라이트 마치
- **Henyey–Greenstein 역광** — 실버 라이닝
- **디테일 침식** — 미세 wisp
- **컨트롤** — 범위, 밀도, 고도, 두께, 스케일, 둥글기, 실키함, 속도, 태양 강도, 환경, 단계, 저해상도

### 🎬 시네마틱 (Cinematic)

`src/postfx.js` 의 풀 후처리 스택:
- **Anti-aliasing** (Off/2×/4×/8× MSAA)
- **카메라** — 자동 회전, 회전 속도, 초점 / FOV, 레터박스
- **피사계 심도 (DoF)** — 토글, 초점 거리 (포커스 평면 시각화), 조리개, 최대 블러
- **효과** — 블룸 (강도/반경/임계값), 필름 그레인, 비네트, 색수차, 대비, 채도

### 🚗 모델 + 이끼 누적

- **3개 내장 모델** — `Rusty Car` / `Porsche 911` (GLB)
- **자체 .glb 임포트** — `📂 Import GLB…` 버튼
- **변환 컨트롤** — 스케일 / 위치 X/Y/Z / 회전 Y°
- **이끼 누적** — 지면과 같은 FBM 마스크로 모델 윗면에 이끼 자라남

### 🎨 머티리얼 (Material)

- **2개 PBR 베이스 셋** — `Ground048` / `Ground103` (PBR 텍스처 5장씩)
- **5개 컨트롤** — 텍스처 스케일, 노멀 강도, AO 강도, 러프니스, 변위

---

## 🚀 빠른 시작 (Run)

### 필요 환경

- **Node.js** 18 이상
- **pnpm** (권장) 또는 npm
- **WebGL2** 지원 브라우저

### 설치 + 개발 서버

```bash
# 의존성 설치
pnpm install

# 개발 서버 (http://localhost:5173)
pnpm dev
```

### 프로덕션 빌드

```bash
pnpm build      # vite build → dist/
pnpm preview    # dist/ 로컬 미리보기
```

### 빌드 결과

```
dist/index.html                  3.84 kB │ gzip:   1.46 kB
dist/assets/index-hnExEycC.js  750.89 kB │ gzip: 193.76 kB
✓ built in 616ms
```

---

## 🎮 조작 방법 (Controls)

| 조작 | 동작 |
|---|---|
| 🖱️ **드래그** | 카메라 궤도 회전 |
| 🖲️ **스크롤** | 줌 인/아웃 |
| 🎛️ **우측 상단 GUI** | 17개 폴더 / 100+ 매개변수 실시간 조절 |
| 🌿 **이끼 토글** | Moss Cover → Enabled |
| 🌱 **잔디 토글** | Grass → Enabled |
| 🚗 **모델 로드** | Model → Pick Model / Load Model / Import GLB |
| 🎲 **시드 무작위화** | 각 폴더의 🎲 Randomize Seed 버튼 |

---

## 🏛️ 프로젝트 구조 (Architecture)

```
index.html            부트 화면, 한글 안내문, GLB 입력
public/
  Ground048_*.jpg     PBR 토양 텍스처 5장 (Color/AO/Displacement/Normal/Roughness)
  Ground103_*.jpg     PBR 토양 텍스처 5장 (대안 셋)
  Moss002_*.jpg       PBR 이끼 텍스처 4장 (Color/AO/Displacement/Normal/Roughness)
  old_rusty_car_2.glb 내장 모델
  porsche_911.glb     내장 모델
src/
  main.js             메인 진입점 (1,155 라인) — 모든 GUI + 씬 + 렌더 루프
  i18n.js             🆕 한국어 / 영어 이중 언어 모듈 (sigco3111 fork)
  grass.js            GPU 인스턴싱 잔디 (284 라인)
  clouds.js           볼류메트릭 구름 레이마치 (318 라인)
  postfx.js           시네마틱 후처리 스택 (142 라인)
  model.js            GLB 로더 + 이끼 누적 셰이더 (291 라인)
package.json          의존성: three 0.185, lil-gui 0.20, vite 6
vite.config.js        Vite 기본 설정
```

---

## 🈂️ 한국어화 작업 노트

> sigco3111 본 fork 에서 진행한 한국어화의 디자인 결정과 안전 검증.

### 1️⃣ 이중 언어 모듈 (`src/i18n.js`)

- **131+ 키** — GUI 폴더 17개 + 컨트롤 100+ + 🎲 시드 무작위화 6개 부
- `KO` 객체 (한국어) + `EN` 객체 (영어 미러) + `setLanguage()` 함수
- 기본값은 한국어 (`current = KO`) — 한국 사용자가 즉시 한글로 시작
- `t(key)` 가 안전한 폴백 제공 — 키가 없으면 EN → 마지막으로 키 자체 반환

### 2️⃣ 식별자 침투 0건 — 안전 검증

자동 영→한 매핑이 식별자 내부에 침투하는 위험을 방지하기 위해:

- `i18n.js` 의 KO 값은 **문자열 리터럴에만** 위치
- Three.js 객체 (`uMoundScale`, `uMossEnabled`, `uBase`, `uHeight` 등), 셰이더 유니폼, GLB 노드 이름 모두 **원본 그대로 보존**
- 검증 방법: 빌드된 bundle 에서 `\b[a-zA-Z_$]+[가-힣]+...` 패턴 매치 → **0건**

### 3️⃣ 다중 🎲 무작위화 버튼

이 프로젝트는 **6개 폴더에 🎲 Randomize Seed 버튼**이 있어, 각 노이즈 필드 (언덕, 톤, 수분, 균열, 이끼, 잔디, 모델이끼) 의 시드를 독립적으로 무작위화할 수 있습니다. 모두 같은 `randomizeSeed` 키 공유 — 한 번 정의로 6번 재사용.

### 4️⃣ 정적 HTML 한글로 선박힘

`<html lang="ko">`, `<title>`, 좌하단 안내문을 빌드 전 `index.html` 에 직접 한글 박음.

### 5️⃣ Vercel 자동 도메인 사용

CLI 가 준 첫 URL (`grasssystemthreejs-...-sigco3111s-projects.vercel.app`) 은 Production Deployment Protection SSO 가드가 걸려 302 → 로그인 리다이렉트. **자동 할당된 production 도메인** (`grasssystemthreejs.vercel.app`) 은 보호 없음.

### 6️⃣ main.js 1,155 라인 — 한 번에 17개 폴더 패치

`main.js` 의 모든 GUI 매개변수가 한 곳에 모여 있어 **17개 폴더의 모든 컨트롤을 한 번에** `t()`로 교체 가능. 폴더 헤더 + 컨트롤 이름 모두 i18n 키 사용.

---

## 🙏 원본 저장소 및 크레딧

> 본 프로젝트는 다음 원본 저장소의 한국어 fork 입니다. 모든 핵심 코드와 알고리즘은 원작자의 업적입니다.

- **원본 저장소**: <https://github.com/achrefelouafi/GrassSystemThreeJS>
- **원작자**: [@achrefelouafi](https://github.com/achrefelouafi) (mohamedachrefelouafi)
- **원본 별점**: 57 ⭐
- **원본 라이선스**: MIT (© 2026 mohamedachrefelouafi)

### 원본의 기술적 핵심 (참고)

> The following technical achievements are entirely the original author's work. The Korean fork only translates the user interface and deploys it to Vercel — every shader, every GPU-instanced blade, every FBM mask is from the original codebase.

- **GPU 인스턴싱 잔디** — 단일 draw call, 정점 셰이더에서 위치/컬/바람 애니메이션
- **`MeshStandardMaterial` + `onBeforeCompile` 셰이더 주입** — 토양 / 잔디 / 이끼 모두 실제 라이팅 + 그림자 + 안개 공유
- **공유 월드 노이즈 필드** — 토양 / 이끼 / 잔디 마스크가 동일한 높이장 사용
- **마른 균열 (Worley)** — 셀룰러 노이즈 + 워플링으로 실제 홈 생성
- **Ashima Arts Simplex 노이즈** + 자체 FBM 헬퍼
- **Worley (셀룰러) 노이즈** — 균열 판상 네트워크
- **3개 PBR 텍스처 셋** — `Ground048`, `Ground103`, `Moss002` (ambientCG 네이밍)
- **GPU 레이마치 볼류메트릭 구름** — 박스 슬랩 + Henyey–Greenstein + 디테일 침식
- **MSAA + Unreal Bloom + Bokeh DoF + Tone Map + Grade** 풀 FX 스택
- **3점 스튜디오 라이팅** — 따뜻한 키 / 차가운 필 / 따뜻한 림 + RoomEnvironment IBL
- **모델별 이끼 누적** — 같은 FBM 마스크로 모델 윗면에 이끼

### PBR 텍스처 크레딧

`Ground048_1K-JPG_*`, `Ground103_1K-JPG_*`, `Moss002_1K-JPG_*` — [ambientCG](https://ambientcg.com/) 명명 규약 따름

---

## 📜 라이선스

본 저장소는 원본과 동일한 **MIT License** 하에 배포됩니다.

```
MIT License

Copyright (c) mohamedachrefelouafi (원본)
Copyright (c) sigco3111 (한국어 fork)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🌐 한국어 fork 정보

| 항목 | 값 |
|---|---|
| **포크 시작일** | 2026-08-12 |
| **원본 HEAD** | (원본 저장소 마지막 커밋) |
| **한국어 fork HEAD** | (feat: 한글화 + i18n.js) |
| **배포 플랫폼** | Vercel |
| **라이브 도메인** | <https://grasssystemthreejs.vercel.app> |

🪨 **즐거운 토양 조각하기 되세요!**
