import vitaminU from '../../../../public/vitaminU.png';
import vitaminE from '../../../../public/vitaminE.png';
import lutein from '../../../../public/lutein.png';
import lactoferrin from '../../../../public/lactoferrin.png';
import vitaminB1 from '../../../../public/vitaminB1.png';
import multivitamin from '../../../../public/multivitamin.png';

export const choosenutrients = (el) => {
  const pill = ['INTESTINE', 'SKIN', 'EYE', 'IMMUNE', 'FATIGUE', 'NONE'];
  if (el.disease === pill[0]) {
    return nutrients[0];
  } else if (el.disease === pill[1]) {
    return nutrients[1];
  } else if (el.disease === pill[2]) {
    return nutrients[2];
  } else if (el.disease === pill[3]) {
    return nutrients[3];
  } else if (el.disease === pill[4]) {
    return nutrients[4];
  } else if (el.disease === pill[5] || el.disease == undefined) {
    return nutrients[5];
  }
};

const nutrients = [
  {
    help: '비타민U(메틸메티오닌설포늄염화물)는 위장점막보호에 도움을 줄 수 있습니다.',
    explain:
      '비타민U는 위궤양, 십이지장궤양 등 궤양을 억제하고 치료하는 데 사용되고 있습니다. 때문에 비타민U를 항궤양성 비타민이라고 합니다. 또한 위암 억제 효과가 있습니다. 염증이나 궤양이 줄면 발암률도 감소합니다.',
    caution:
      '스코폴리아 성분으로 녹내장, 배뇨장애 환자, 허약자 또는 고령자분들은 섭취 시 주의가 필요합니다.',
    survey: '비타민U',
    listone: '국산 양배추 추출분말 99% 함유',
    listtwo: '중금속이물 "불검출" 판정',
    listthree: '1일 1회, 1회 1정으로 간단하게 섭취가능',
    link: 'https://www.coupang.com/vp/products/5816927878?itemId=10027179991&vendorItemId=77310129082&sourceType=srp_product_ads&clickEventId=3defc6e3-df27-4e06-9bc4-e0786b9b9cb0&korePlacement=15&koreSubPlacement=1&q=양배추에+쏙+빠지다&itemsCount=36&searchId=e2de1272ee1140fd817c57d899f83792&rank=0&isAddedCart=',
    picture: `${vitaminU}`,
  },
  {
    help: '비타민E는 피부 보습에 도움을 줄 수 있습니다.',
    explain:
      '비타민 E는 몸 전체에 존재하는 지용성 비타민으로, 피부(특히 피지)와 지방 조직에 집중되어 있습니다. 식물과 달리 인간은 비타민 E를 체내에서 합성할 수 없습니다. 대신 우리는 견과류, 씨앗, 잎채소 등의 음식을 통해 필수 영양소인 비타민 E를 섭취합니다. 올리브 오일 같은 식물성 오일과 미정제 곡물에도 비타민 E가 함유되어 있습니다.',
    caution:
      '결핍되면 노화, 불임 등의 증상이 나타나며, 과잉시 부작용으로 피로, 출혈, 설사, 두통 등의 증상이 나타납니다.',
    survey: '비타민E',
    listone: '1정당 400IU 비타민E 함유',
    listtwo: '젤라틴, 글리세린, 물, 대두 레시틴이 함유',
    listthree: '글루텐 프리, 비유전자변형식품',
    link: 'https://www.coupang.com/vp/products/200079222?itemId=580610691&vendorItemId=4722785315&pickType=COU_PICK&q=비타민E+240캡슐&itemsCount=36&searchId=9bc0b5b1d9c241248dbf09d6d8f0c8e7&rank=2&isAddedCart=',
    picture: `${vitaminE}`,
  },
  {
    help: '루테인은 눈 건강에 도움을 줄 수 있습니다.',
    explain:
      '루테인은 잔토필의 하나로서, 현재까지 알려진 600개의 자연 발생 카로티노이드 가운데 하나입니다. 루테인은 식물, 기타 잔토필에서만 합성되며 시금치, 케일, 노란당근 등의 잎채소에서 대량으로 발견됩니다.',
    caution:
      '흡연자의 경우 루테인에 함유된 카로티노이드 성분을 과량 복용할 경우 폐암 발생의 위험이 높아지는 것으로 알려져 있습니다. 루테인을 섭취할 때 간혹 울렁거림 등의 위장장애를 호소하기도 하는데 이러한 경우 식사 직후에 충분한 양의 물로 섭취하길 권장드립니다.',
    survey: '루테인',
    listone: '식약처 고시기준 1일 최대함량 20mg 함유',
    listtwo: '식약처 인증 3종 복합기능성',
    listthree: '엄선된 6종의 부원료 함유',
    link: 'https://www.coupang.com/vp/products/1930104463?itemId=3276643714&vendorItemId=83289676698&sourceType=srp_product_ads&clickEventId=8d0a321c-7d4f-4248-a633-1683f116245f&korePlacement=15&koreSubPlacement=1&q=루테인&itemsCount=36&searchId=82960e29c7034ec9ad6a6a209f37a7e5&rank=0&isAddedCart=',
    picture: `${lutein}`,
  },
  {
    help: '락토페린은 면역력 증강에 도움을 줄 수 있습니다.',
    explain:
      '락토페린은 사람의 초유와 체액, 젖소의 초유 등에서 나오는 항바이러스, 항균 물질로 특히 아이를 출산한 후 1주일 동안 분비되는 초유에 가장 많이 포함되어 아이가 외부 균에 감염되는 것을 막습니다.',
    caution:
      '1일 섭취량은 150~300mg로 과다하게 복용하면 장 움직임이 너무 활발해져 장이 늘어지는 느낌이 들 수 있습니다. 락토페린은 기본적으로 유제품이기 때문에 유제품 알레르기가 있는 사람은 주의해야 합니다.',
    survey: '락토페린',
    listone: '국산 양배추 추출분말 99% 함유',
    listtwo: 'Westland Milk Poruducts사의 품질 높은 원료',
    listthree: '전문적인 기술력과 원료를 기반으로 한 최상의 품질 원료 사용',
    link: 'https://www.coupang.com/vp/products/7119385935?itemId=17821677588&vendorItemId=82585563475&src=1042503&spec=10304982&addtag=400&ctag=7119385935&lptag=10304982I17821677588&itime=20230515152159&pageType=PRODUCT&pageValue=7119385935&wPcid=16841317199507919886528&wRef=&wTime=20230515152159&redirect=landing&gclid=CjwKCAjwjYKjBhB5EiwAiFdSfv-OP3aFuttkjJIhGiXwCm3y-dnryStS6iV8sTfGJhRgBQK-4-r_whoCK_AQAvD_BwE&mcid=6c85237ed25c4c699ab9c723b8230719&campaignid=18648240628&adgroupid=&isAddedCart=',
    picture: `${lactoferrin}`,
  },
  {
    help: '비타민B1(티아민)은 피로 회복에 도움을 줄 수 있습니다.',
    explain:
      '비타민B1은 당질을 에너지로 전환할 때 작용하는 효소를 도와줍니다. 따라서 티아민이 부족하면 당질이 분해되지 못하고 피루브산과 유산 등 피로물질이 몸에 쌓여 피로해지기 쉽습니다. 그러므로 우리가 당질을 많이 섭취한다면 그에 따라 티아민의 섭취량도 늘려야 할 필요가 있습니다.',
    caution:
      '드물게 메스꺼움, 구토, 현기증을 부작용으로 가지고 있습니다. 이는 과다섭취 시 두드러질 수 있습니다. 몸에 필수적인 성분이고, 부족하면 결핍증이 있으니 적당량 섭취는 필수적입니다.',
    survey: '비타민B1',
    listone: '크랜베리 성분 함유 함유',
    listtwo: '채식주의자도 섭취 가능',
    listthree: '신체 균형을 맞춰주는 완전한 허브',
    link: 'https://www.coupang.com/vp/products/209286?itemId=400742&searchId=feed-c69fbca5169747f2aec81d5f50830d80-view_together_ads-P213570881&vendorItemId=3088249835&sourceType=SDP_ADS&clickEventId=55037972-0357-4416-8623-758a631b7497&isAddedCart=',
    picture: `${vitaminB1}`,
  },
  {
    help: '맞춤추천을 선택하지 않았습니다.',
    explain:
      '건강을 유지하기 위한 종합 비타민을 추천드립니다. 종합 비타민제는 비타민에서 미량원소까지 수십여 종을 한꺼번에 담은 것으로, 능률적으로 영양소의 균형을 바로 잡을 수 있는 가장 기본적인 영양제입니다.',
    caution:
      '종합비타민의 흔한 부작용으로는 섭취시 간수취 상승, 피부 색 변질, 두통이나 위통이 발생합니다.',
    survey: '종합비타민',
    listone: '비타민 13종, 미네랄 10종 함유',
    listtwo: '기초건강, 항산화, 에너지, 정상적인 면역기능',
    listthree: '한국인을 위한 멀티비타민',
    link: 'https://www.coupang.com/vp/products/5889833660?itemId=17892709009&vendorItemId=78477362984&src=1042503&spec=70304777&addtag=400&ctag=5889833660&lptag=I17892709009V78477362984A312719836&itime=20230516005419&pageType=PRODUCT&pageValue=5889833660&wPcid=3732756075192616022531&wRef=&wTime=20230516005419&redirect=landing&AdNodeId=312719836&gclid=Cj0KCQjwsIejBhDOARIsANYqkD1VPV2sVTEN_Kq8JEB8DuL0owOOqNUl8nJfpxWxE7niV-M9GYgTclcaAsIzEALw_wcB&mcid=a1f644cedb7a4e0ba0aaf370e67d538e&campaignid=20040482370&adgroupid=&isAddedCart=',
    picture: `${multivitamin}`,
  },
];
