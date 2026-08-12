// ============================================================================
//  한국어 / English i18n — UI 문자열만 노출, 식별자는 절대 건드리지 않음
// ============================================================================

const KO = {
  // ---- 앱 / 부트 ----
  appTitle: '🪨 토양 스튜디오 (한글판)',
  creditBrand: '토양 스튜디오',
  creditHint: '드래그로 궤도 회전 · 스크롤로 줌 · 지면 조각하기',

  // ---- GUI 최상위 ----
  guiTitle: '🪨 토양 스튜디오',

  // ---- GUI 폴더 ----
  folderMaterial: '머티리얼',
  folderSoil: '토양 표면',
  folderMounds: '언덕과 기복',
  folderTone: '톤과 색상',
  folderMoisture: '수분',
  folderCracks: '마른 균열',
  folderMoss: '🌿 이끼',
  folderMossMask: '범위 마스크',
  folderMossVol: '높이 볼륨',
  folderMossLook: '텍스처와 셰이딩',
  folderModel: '🚗 모델',
  folderAccum: '이끼 누적',
  folderGrass: '🌱 잔디',
  folderGrassMask: '범위 마스크',
  folderWind: '🍃 바람',
  folderLighting: '조명',
  folderClouds: '☁️ 구름',
  folderCShape: '모양',
  folderCMove: '움직임',
  folderCLight: '조명과 색상',
  folderCQuality: '품질',
  folderCine: '🎬 시네마틱',
  folderCam: '카메라',
  folderDof: '피사계 심도',
  folderFx: '효과',

  // ---- 머티리얼 ----
  materialBase: '베이스 셋',
  materialMix: '믹스',
  normalStrength: '노멀 강도',
  displacement: '변위',
  randomizeSeed: '🎲 시드 무작위화',

  // ---- 토양 표면 ----
  moundScale: '언덕 스케일',
  reliefScale: '기복 스케일',
  reliefStrength: '기복 강도',
  toneColor: '톤 색상',
  toneCoverage: '톤 범위',
  toneScale: '톤 스케일',
  moistureLevel: '수분 레벨',
  moistureCoverage: '수분 범위',
  moistureScale: '수분 스케일',
  moistureEdge: '수분 가장자리',
  moistureDarken: '수분 어둡게',
  moistureGloss: '수분 광택',
  crackStrength: '균열 강도',
  crackScale: '균열 스케일',
  crackEdge: '균열 가장자리',
  crackDepth: '균열 깊이',

  // ---- 이끼 ----
  mossEnabled: '이끼 켜기',
  mossHeight: '이끼 높이',
  mossCoverage: '범위',
  mossMaskScale: '마스크 스케일',
  mossEdge: '가장자리',
  mossPatchy: '얼룩 정도',
  mossHeightVar: '높이 변화',
  mossRoughness: '거칠기',
  mossBump: '범프',
  mossBumpScale: '범프 스케일',
  mossSpore: '포자 / 반짝임',

  // ---- 모델 ----
  modelPick: '모델 선택',
  modelLoad: 'Load .glb…',
  modelMoss: '이끼 누적',
  accumCoverage: '범위',
  accumScale: '스케일',
  accumEdge: '가장자리',
  accumHeightVar: '높이 변화',
  accumSeedX: '시드 X',
  accumSeedY: '시드 Y',
  accumRandomize: '🎲 시드 무작위화',

  // ---- 잔디 ----
  grassEnabled: '잔디 켜기',
  grassCount: '잔디 수',
  grassCoverage: '범위',
  grassMaskScale: '마스크 스케일',
  grassEdge: '가장자리',
  grassHeight: '잔디 키',
  grassWidth: '잔디 너비',
  grassTint: '잔디 틴트',
  grassPatchy: '얼룩 정도',

  // ---- 바람 ----
  windStrength: '바람 강도',
  windSpeed: '바람 속도',
  windGust: 'gust 크기',
  windDir: '바람 방향',
  windFlutter: 'flutter',

  // ---- 조명 ----
  exposure: '노출',
  keyLight: '키 라이트',
  fillLight: '필 라이트',
  rimLight: '림 라이트',
  ambient: '환경광',
  envIntensity: '환경 / IBL',

  // ---- 구름 ----
  cloudsEnabled: '구름 켜기',
  cloudCoverage: '범위',
  cloudDensity: '밀도',
  cloudAltitude: '고도',
  cloudThickness: '두께',
  cloudScale: '스케일',
  cloudRoundness: '둥글기',
  cloudWisp: '실키함',
  cloudSpeed: '속도',
  cloudSun: '태양 강도',
  cloudAmbient: '환경',
  cloudSteps: '단계',
  cloudDownres: '저해상도',

  // ---- 시네마틱 ----
  autoOrbit: '자동 회전',
  orbitSpeed: '회전 속도',
  fov: '초점 / FOV',
  letterbox: '레터박스',
  dofEnabled: '피사계 심도 켜기',
  focusDistance: '초점 거리',
  aperture: '조리개',
  maxBlur: '최대 블러',
  bloom: '블룸',
  bloomRadius: '블룸 반경',
  bloomThreshold: '블룸 임계값',
  filmGrain: '필름 그레인',
  vignette: '비네트',
  chromaticAberration: '색수차',
  contrast: '대비',
  saturation: '채도',
};

const EN = {
  appTitle: '🪨 Soil Studio',
  creditBrand: 'SOIL STUDIO',
  creditHint: 'drag to orbit · scroll to zoom · sculpt the ground',

  guiTitle: '🪨 Soil Studio',

  folderMaterial: 'Material',
  folderSoil: 'Soil Surface',
  folderMounds: 'Mounds & Relief',
  folderTone: 'Tone & Color',
  folderMoisture: 'Moisture',
  folderCracks: 'Dry Cracks',
  folderMoss: '🌿 Moss Cover',
  folderMossMask: 'Coverage Mask',
  folderMossVol: 'Height Volume',
  folderMossLook: 'Texture & Shading',
  folderModel: '🚗 Model',
  folderAccum: 'Moss Accumulation',
  folderGrass: '🌱 Grass',
  folderGrassMask: 'Coverage Mask',
  folderWind: '🍃 Wind',
  folderLighting: 'Lighting',
  folderClouds: '☁️ Clouds',
  folderCShape: 'Shape',
  folderCMove: 'Motion',
  folderCLight: 'Lighting & Color',
  folderCQuality: 'Quality',
  folderCine: '🎬 Cinematic',
  folderCam: 'Camera',
  folderDof: 'Depth of Field',
  folderFx: 'Effects',

  materialBase: 'Base Set',
  materialMix: 'Mix',
  normalStrength: 'Normal Strength',
  displacement: 'Displacement',
  randomizeSeed: '🎲 Randomize Seed',

  moundScale: 'Mound Scale',
  reliefScale: 'Relief Scale',
  reliefStrength: 'Relief Strength',
  toneColor: 'Tone Color',
  toneCoverage: 'Tone Coverage',
  toneScale: 'Tone Scale',
  moistureLevel: 'Moisture Level',
  moistureCoverage: 'Moisture Coverage',
  moistureScale: 'Moisture Scale',
  moistureEdge: 'Moisture Edge',
  moistureDarken: 'Moisture Darken',
  moistureGloss: 'Moisture Gloss',
  crackStrength: 'Crack Strength',
  crackScale: 'Crack Scale',
  crackEdge: 'Crack Edge',
  crackDepth: 'Crack Depth',

  mossEnabled: 'Moss Enabled',
  mossHeight: 'Moss Height',
  mossCoverage: 'Coverage',
  mossMaskScale: 'Mask Scale',
  mossEdge: 'Edge',
  mossPatchy: 'Patchiness',
  mossHeightVar: 'Height Variation',
  mossRoughness: 'Roughness',
  mossBump: 'Bump',
  mossBumpScale: 'Bump Scale',
  mossSpore: 'Spore / Sparkle',

  modelPick: 'Pick Model',
  modelLoad: 'Load .glb…',
  modelMoss: 'Moss Accumulation',
  accumCoverage: 'Coverage',
  accumScale: 'Scale',
  accumEdge: 'Edge',
  accumHeightVar: 'Height Variation',
  accumSeedX: 'Seed X',
  accumSeedY: 'Seed Y',
  accumRandomize: '🎲 Randomize Seed',

  grassEnabled: 'Grass Enabled',
  grassCount: 'Grass Count',
  grassCoverage: 'Coverage',
  grassMaskScale: 'Mask Scale',
  grassEdge: 'Edge',
  grassHeight: 'Grass Height',
  grassWidth: 'Grass Width',
  grassTint: 'Grass Tint',
  grassPatchy: 'Patchiness',

  windStrength: 'Wind Strength',
  windSpeed: 'Wind Speed',
  windGust: 'Gust Size',
  windDir: 'Wind Direction',
  windFlutter: 'Flutter',

  exposure: 'Exposure',
  keyLight: 'Key Light',
  fillLight: 'Fill Light',
  rimLight: 'Rim Light',
  ambient: 'Ambient',
  envIntensity: 'Env / IBL',

  cloudsEnabled: 'Clouds Enabled',
  cloudCoverage: 'Coverage',
  cloudDensity: 'Density',
  cloudAltitude: 'Altitude',
  cloudThickness: 'Thickness',
  cloudScale: 'Scale',
  cloudRoundness: 'Roundness',
  cloudWisp: 'Wispiness',
  cloudSpeed: 'Speed',
  cloudSun: 'Sun Strength',
  cloudAmbient: 'Ambient',
  cloudSteps: 'Steps',
  cloudDownres: 'Down Resolution',

  autoOrbit: 'Auto Orbit',
  orbitSpeed: 'Orbit Speed',
  fov: 'Focal / FOV',
  letterbox: 'Letterbox',
  dofEnabled: 'Enable DoF',
  focusDistance: 'Focus Distance',
  aperture: 'Aperture',
  maxBlur: 'Max Blur',
  bloom: 'Bloom',
  bloomRadius: 'Bloom Radius',
  bloomThreshold: 'Bloom Threshold',
  filmGrain: 'Film Grain',
  vignette: 'Vignette',
  chromaticAberration: 'Chromatic Aberration',
  contrast: 'Contrast',
  saturation: 'Saturation',
};

let current = KO;

export function setLanguage(lang) {
  current = lang === 'en' ? EN : KO;
}

export function t(key) {
  const v = current[key];
  if (v !== undefined) return v;
  const e = EN[key];
  if (e !== undefined) return e;
  return key;
}

export const L = {
  KO,
  EN,
  current: () => current,
};
