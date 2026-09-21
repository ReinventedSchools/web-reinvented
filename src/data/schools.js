import imgPuemboHero from '../assets/sedes/puemboPrincipal.webp'
import imgPuemboLogo from '../assets/logos/puemboB.png'
import imgPuemboCampus from '../assets/sedes/puemboJardin.webp'
import imgIdvLogo from '../assets/logos/idcB.png'
import imgIdvHero from '../assets/sedes/idv/portadaiv.jpg'
import imgRedefiniendo from '../assets/home/Redefiniendo.webp'
import imgIdvSection from '../assets/sedes/idv/idv_seccion.webp'
import imgIDVC1 from '../assets/sedes/idv/c1.jpg'
import imgIDVC2 from '../assets/sedes/idv/c2.jpg'
import imgIDVC3 from '../assets/sedes/idv/c3.png'
import imgIDVC4 from '../assets/sedes/idv/c4.jpg'
import imgIDVC5 from '../assets/sedes/idv/c5.png'
import imgIDVC6 from '../assets/sedes/idv/c6.jpg'
import imgIDVC7 from '../assets/sedes/idv/c7.jpg'
import imgIDVC8 from '../assets/sedes/idv/c8.jpg'
import imgIDVC9 from '../assets/sedes/idv/c9.jpg'
import imgSantaClaraLogo from '../assets/logos/scb.png'
import imgSantaClaraHero from '../assets/sedes/santac/principalscl.jpg'
import imgSantaClaraLoc from '../assets/sedes/santac/ubicado.jpg'
import imgSantaClaraJardin from '../assets/sedes/santac/jardine.png'
import imgSC1 from '../assets/sedes/santac/sc1.jpeg'
import imgSC2 from '../assets/sedes/santac/sc2.jpeg'
import imgSC3 from '../assets/sedes/santac/sc3.jpeg'
import imgSC4 from '../assets/sedes/santac/sc4.png'
import imgSC5 from '../assets/sedes/santac/sc5.jpeg'
import imgSC6 from '../assets/sedes/santac/sc6.png'
import imgSC7 from '../assets/sedes/santac/sc7.png'
import imgSC8 from '../assets/sedes/santac/sc8.png'
import imgSC9 from '../assets/sedes/santac/sc9.png'

import imgIdvResponsabilidad from '../assets/sedes/idv/responsabilidad.png'
import imgIdvTiempo from '../assets/sedes/idv/tiempo.png'
import imgIdvDiciplina from '../assets/sedes/idv/diciplina.png'
import imgIdvCompetencia from '../assets/sedes/idv/competencia.png'

import imgRimacLogo from '../assets/logos/rimacB.png'
import imgR1 from '../assets/sedes/rimac/r1.jpg'
import imgR2 from '../assets/sedes/rimac/r2.jpg'
import imgR3 from '../assets/sedes/rimac/r3.jpg'
import imgR4 from '../assets/sedes/rimac/r4.jpg'
import imgR5 from '../assets/sedes/rimac/r5.jpg'
import imgR6 from '../assets/sedes/rimac/r6.jpg'
import imgRimacImg from '../assets/sedes/rimac/Rimac.png'
import imgPC1 from '../assets/sedes/puembo/c1.jpeg'
import imgPC2 from '../assets/sedes/puembo/c2.jpeg'
import imgPC3 from '../assets/sedes/puembo/c3.jpeg'
import imgPC4 from '../assets/sedes/puembo/c4.jpeg'
import imgPC5 from '../assets/sedes/puembo/c5.jpeg'
import imgPC6 from '../assets/sedes/puembo/c6.jpeg'
import imgPC7 from '../assets/sedes/puembo/c7.jpeg'
// import imgPC8 from '../assets/sedes/puembo/c8.jpeg'
import imgPC9 from '../assets/sedes/puembo/c9.jpeg'

export const schools = {
  puembo: {
    slug: 'puembo',
    name: 'Puembo',
    heroImg: imgPuemboHero,
    heroPosition: 'bottom',
    logoImg: imgPuemboLogo,
    locImg:  imgPuemboCampus,
    stageColors: [null, null, null, null, '#7b6fcf', null, null],
    ed: '#2bae8c',
    nameColor: '#7d8590',
    band: '#2bae8c',
    bandText: '#eafff7',
    arrow: 'purple',
    circle: '#2bae8c',
    propuestaColor: '#7b6fcf',
    since: 'Desde 2020',
    galleryImgs: [imgPC1, imgPC2, imgPC3, imgPC4, imgPC5, imgPC6, imgPC7, imgPC9],
    intro:
      'ReinventED Puembo fue el primer campus de la red. Nació en 2020, en un momento que obligó al mundo a cuestionar muchas de sus certezas, incluida la educación. Esta fue la oportunidad de diseñar desde cero un sistema de aprendizaje personalizado, estructurado y conectado con la realidad de cada estudiante. Desde el inicio, hemos crecido de manera intencional, cuidando aquello que define nuestra propuesta: conocer profundamente a cada estudiante, ofrecer experiencias de aprendizaje relevantes a sus intereses y necesidades, y sostener un sistema que combina autonomía, acompañamiento cercano y altos estándares. Porque creemos que la calidad de una experiencia educativa no se mide por cuántos estudiantes alcanza, sino por el impacto que tiene en cada uno de ellos.',
    locTitle: 'Ubicado en Puembo',
    locText: [  
      'El campus está rodeado de naturaleza y espacios abiertos que amplían las posibilidades de aprendizaje.',
      'La naturaleza es recurso pedagógico. El movimiento, la exploración y el contacto con el entorno forman parte de la experiencia diaria.',
      'El espacio físico acompaña al modelo: talleres abiertos, áreas colaborativas y ambientes diseñados para favorecer autonomía y concentración.',
    ],
    grades: [
      { t: '10th grade', b: true }, { t: ' se abrirá en el período 2026 - 2027. ' },
      { t: '11th grade', b: true }, { t: ' en el período 2027 - 2028 y ' },
      { t: '12th grade', b: true }, { t: ' en 2028 - 2029.' },
    ],
    calendlyUrl: 'https://calendly.com/visitas-reinventedpuembo/agendamiento',
    formUrl: 'https://form.123formbuilder.com/6033053/formulario-de-admisiones-reinvented-puembo',
  },
  idv: {
    slug: 'idv',
    name: 'IDV',
    heroImg: imgRedefiniendo,
    heroPosition: 'bottom',
    heroHeight: '610px',
    logoRight: true,
    logoImg: imgIdvLogo,
    locImg: imgIdvHero,
    locImgFit: 'contain',
    galleryImgs: [imgIDVC1, imgIDVC2, imgIDVC3, imgIDVC4, imgIDVC5, imgIDVC6, imgIDVC7,imgIDVC8,imgIDVC9],
    hideCamino: true,
    hideStudents: true,
    sectionNoBg: true,
    sectionImgRight: true,
    nominacionImg: imgRedefiniendo,
    nominacionText: 'ReinventED IDV ha sido nominado entre los 10 mejores colegios del mundo en los World\'s Best School Prizes 2026 de T4 Education, un reconocimiento internacional que destaca el impacto de nuestro modelo educativo y nuestro compromiso con el bienestar, el crecimiento integral y el éxito de cada estudiante.',
    sectionImg: imgIdvSection,
    sectionTitle: 'Educación y deporte de alto rendimiento',
    sectionText: 'ReinventED IDV integra el desarrollo académico con la formación deportiva profesional. El sistema permite adaptar horarios, ritmos y planificación sin sacrificar profundidad académica. La personalización es clave en un entorno donde los calendarios de competencia, viajes y cargas físicas requieren flexibilidad estructurada.',
    studentsDevelop: [
      'Responsabilidad sobre su proceso académico',
      'Gestión del tiempo',
      'Disciplina y planificación',
      'Competencias académicas con estándares altos',
    ],
    studentsDevelopIcons: [imgIdvResponsabilidad, imgIdvTiempo, imgIdvDiciplina, imgIdvCompetencia],
    ed: '#4fa3d1',
    nameColor: '#e5007e',
    band: '#1b4a77',
    bandText: '#dce8f3',
    arrow: 'magenta',
    circle: '#1b4a77',
    faqDot: 'var(--magenta)',
    since: 'Desde 2021',
    intro:
      'ReinventED IDV nació a partir de la alianza entre ReinventED Schools y el club Independiente del Valle, con un objetivo claro: integrar un sistema académico personalizado dentro de un entorno de alto rendimiento deportivo. Aquí la exigencia académica y la excelencia deportiva no compiten entre sí, sino que se fortalecen y permiten un desarrollo integral de los estudiantes. ReinventED IDV no es un colegio tradicional adaptado al deporte. Es la implementación del Sistema ReinventED dentro de un contexto de formación profesional, donde disciplina, estructura y autonomía son esenciales.',
    locTitle: 'El colegio opera dentro del complejo deportivo \n de Independiente del Valle,',
    locText: [
      'y es exclusivo para las formativas del equipo, lo que permite a los estudiantes estar cerca de sus entrenamientos y compromisos deportivos.',
      'Además, el plan de estudios flexible permite a los jóvenes futbolistas adaptarse a sus viajes y competencias internacionales sin interrumpir su proceso educativo.',
    ],
    grades:
      '9th grade se abrirá en el período 2026 - 2027. 10th, 11th y 12th grade se incorporarán de forma progresiva.',
    faqItems: [
      { q: '¿Puedo aplicar a ReinventED IDV?', a: 'ReinventED IDV es exclusivo para los chicos que son parte de las formativas de Independiente del Valle. El colegio no cuenta con un proceso propio de admisión.' },
      { q: '¿Qué hace diferente a ReinventED IDV?', a: 'ReinventED IDV integra aprendizaje personalizado, excelencia académica y desarrollo deportivo, permitiendo que los estudiantes persigan sus metas sin sacrificar su educación.' },
      { q: '¿Cómo compatibilizan el deporte y los estudios?', a: 'Nuestra metodología flexible permite que los estudiantes gestionen su tiempo, mantengan el ritmo académico y avancen en sus metas deportivas y personales.' },
      { q: '¿Qué habilidades desarrollan los estudiantes?', a: 'Además de los aprendizajes académicos, fortalecen autonomía, disciplina, pensamiento crítico, trabajo en equipo, comunicación y bienestar integral.' },
      { q: '¿Cómo es el acompañamiento de los educadores?', a: 'Los educadores actúan como mentores que acompañan de cerca el progreso académico, personal y emocional de cada estudiante.' },
    ],
  },
  'santa-clara': {
    slug: 'santa-clara',
    name: 'Santa Clara',
    heroImg: imgSantaClaraHero,
    logoImg: imgSantaClaraLogo,
    locImg: imgSantaClaraLoc,
    caminoImg: imgSantaClaraJardin,
    propuestaColor: '#9fc131',
    stageColors: ['#9fc131', '#c2218f', '#9fc131', '#c2218f', '#9fc131', '#c2218f', '#b0b0b0'],
    faqDot: 'var(--magenta)',
    galleryImgs: [imgSC1, imgSC2, imgSC3, imgSC4, imgSC5, imgSC6, imgSC7, imgSC8, imgSC9],
    ed: '#9fc131',
    nameColor: '#ffffff',
    band: '#9fc131',
    bandText: '#f5ffe0',
    arrow: 'magenta',
    circle: '#9fc131',
    since: 'Desde 2022',
    intro:
      'ReinventED Santa Clara nació en el Valle de los Chillos, como parte del crecimiento natural de la red. Luego de la consolidación del modelo en ReinventED Puembo y ReinventED IDV, su apertura respondió a una necesidad clara: ampliar el acceso al Sistema ReinventED en una nueva comunidad, manteniendo intactos los principios de personalización con estructura y altos estándares.',
    locTitle: 'Ubicado en el Valle de los Chillos,',
    locText: [
      'ReinventED Santa Clara ofrece un entorno que combina accesibilidad, comunidad y espacios diseñados para favorecer concentración, autonomía y trabajo colaborativo.',
      'El diseño del campus acompaña al modelo: talleres abiertos, ambientes flexibles y espacios que promueven interacción y responsabilidad individual.',
    ],
    grades:
      '9th grade se abrirá en el período 2026 - 2027. 10th grade en el período 2027 - 2028, 11th grade en 2028 - 2029 y 12th grade en 2029 - 2030.',
    calendlyUrl: 'https://calendly.com/admisiones-reinvented-santaclara/agendamiento',
    formUrl: 'https://form.123formbuilder.com/6159960/formulario-de-admisiones-reinvented-santa-clara',
    faqItems: [
      { q: '¿Qué hace diferente a ReinventED Santa Clara?', a: 'Somos un colegio bilingüe ubicado en el Valle de los Chillos que combina aprendizaje personalizado, bienestar y desarrollo de habilidades para la vida. Con una comunidad cercana donde cada estudiante es reconocido, acompañado y desafiado a crecer.' },
      { q: '¿Cómo acompañan el bienestar de los estudiantes?', a: 'Creemos que el bienestar es fundamental para aprender. Por eso trabajamos intencionalmente en el desarrollo socioemocional, las relaciones positivas y la construcción de una cultura de respeto y pertenencia.' },
      { q: '¿Cómo funciona el aprendizaje personalizado?', a: 'Cada estudiante sigue un plan de aprendizaje adaptado a sus necesidades, fortalezas e intereses. Además, se establecen metas acordadas entre estudiantes, educadores y familias para acompañar su progreso. Esto permite que el aprendizaje sea más relevante, desafiante y significativo.' },
      { q: '¿Cómo evalúan el aprendizaje?', a: 'Evaluamos tanto el crecimiento académico como el desarrollo de habilidades esenciales como la autonomía, la comunicación, el pensamiento crítico y la colaboración mediante evidencias, proyectos y seguimiento continuo. Contamos con nuestra propia plataforma de medición donde se registra constantemente el progreso de los estudiantes.' },
      { q: '¿Desde qué edad reciben estudiantes?', a: 'En ReinventED Santa Clara recibimos estudiantes desde Nest (inicial 1). Nuestro colegio va creciendo año a año. En el periodo 2026-2027 nuestra oferta va hasta 9th grade (10mo de básica).' },
      { q: '¿El colegio es bilingüe?', a: 'Sí. El inglés forma parte integral de la experiencia educativa y se desarrolla en diferentes contextos de aprendizaje.' },
    ],
  },
  rimac: {
    slug: 'rimac',
    name: 'Rímac',
    heroImg: imgR3,
    heroPosition: 'center',
    logoImg: imgRimacLogo,
    locImg: imgRimacImg,
    locImgFit: 'contain',
    locImgBg: '#fff',
    hideCamino: true,
    galleryImgs: [imgR1, imgR2, imgR3, imgR4, imgR5, imgR6],
    ed: '#f4c20d',
    nameColor: '#4fa3d1',
    band: '#5b87a8',
    bandText: '#eaf2f8',
    arrow: 'yellow',
    circle: '#5b87a8',
    since: 'Desde 2024',
    intro:
      'ReinventED Rímac nace como una propuesta educativa innovadora para los futbolistas del Club Sporting Cristal, proporcionando un espacio con un sistema académico estructurado que les permite continuar su formación mientras desarrollan su carrera deportiva de alto rendimiento. Su apertura marca además la expansión regional de ReinventED desde Ecuador hacia Perú, consolidando un sistema educativo diseñado para adaptarse a nuevos contextos sin perder estructura, estándares ni enfoque en la autonomía.',
    locTitle: 'Ubicado en Lima, en la Ciudad Deportiva La Florida',
    locText: [
      'el colegio ofrece un modelo flexible que permite a los jóvenes deportistas adaptarse a sus viajes y competencias, sin que su educación se vea comprometida.',
      'El colegio sigue la propuesta educativa de ReinventED con un enfoque en el desarrollo de habilidades socioemocionales, autonomía y bilingüismo. El colegio se abrió en 2024.',
    ],
    grades:
      '9th grade abierto. 10th, 11th y 12th grade se incorporarán de forma progresiva según el crecimiento del campus.',
    sectionNoBg: true,
    sectionImg: imgR2,
    sectionTitle: 'Educación y deporte de alto rendimiento',
    sectionText: 'ReinventED Rimac integra el desarrollo académico con la formación deportiva profesional. El sistema permite adaptar horarios, ritmos y planificación sin sacrificar profundidad académica. La personalización es clave en un entorno donde los calendarios de competencia, viajes y cargas físicas requieren flexibilidad estructurada.',
    studentsDevelop: [
      'Responsabilidad sobre su proceso académico',
      'Gestión del tiempo',
      'Disciplina y planificación',
      'Competencias académicas con estándares altos',
    ],
    studentsDevelopIcons: [imgIdvResponsabilidad, imgIdvTiempo, imgIdvDiciplina, imgIdvCompetencia],
    hideStudents: true,
    faqDot: 'var(--yellow)',
    faqItems: [
      { q: '¿Puedo aplicar a ReinventED Rímac?', a: 'ReinventED Rímac es exclusivo para los chicos que son parte de las formativas del Club Sporting Cristal. El colegio no cuenta con un proceso propio de admisión.' },
      { q: '¿Qué hace diferente a ReinventED Rímac?', a: 'ReinventED Rímac integra aprendizaje personalizado, excelencia académica y desarrollo deportivo, permitiendo que los estudiantes persigan sus metas sin sacrificar su educación.' },
      { q: '¿Cómo compatibilizan el deporte y los estudios?', a: 'Nuestra metodología flexible permite que los estudiantes gestionen su tiempo, mantengan el ritmo académico y avancen en sus metas deportivas y personales.' },
      { q: '¿Qué habilidades desarrollan los estudiantes?', a: 'Además de los aprendizajes académicos, fortalecen autonomía, disciplina, pensamiento crítico, trabajo en equipo, comunicación y bienestar integral.' },
      { q: '¿Cómo es el acompañamiento de los educadores?', a: 'Los educadores actúan como mentores que acompañan de cerca el progreso académico, personal y emocional de cada estudiante.' },
    ],
  },
}

export const stages = [
  { n: 1, name: 'Playschool',    grade: 'Nest, PreK, Kínder',  sub: '3 a 5 años',   color: '#7b6fcf' },
  { n: 2, name: 'Explorers',     grade: '1st & 2nd grade',      sub: '6 a 8 años',   color: '#2bae8c' },
  { n: 3, name: 'Imagineers',    grade: '3th & 4th grade',      sub: '8 a 10 años',  color: '#7b6fcf' },
  { n: 4, name: 'Researchers',   grade: '5th & 6th grade',      sub: '10 a 12 años', color: '#2bae8c' },
  { n: 5, name: 'Creators',      grade: '7th & 8th grade',      sub: '12 a 14 años', color: '#2bae8c' },
  { n: 6, name: 'Entrepreneurs', grade: '9th & 10th grade',     sub: '14 a 16 años', color: '#2bae8c' },
  { n: 7, name: 'Change makers', grade: '11th & 12th grade',    sub: '16 a 18 años', color: '#cfd3da' },
]

export const faqItems = [
  {
    q: '¿Qué hace diferente a ReinventED Puembo? ',
    a: 'ReinventED Puembo es un colegio privado bilingüe que combina aprendizaje personalizado, desarrollo de habilidades para la vida y experiencias de aprendizaje diseñadas para que cada estudiante descubra su potencial y avance a su propio ritmo.',
  },
  {
    q: '¿Cómo funciona el aprendizaje personalizado? ',
    a: 'Cada estudiante sigue un plan de aprendizaje adaptado a sus necesidades, fortalezas e intereses. Además, se establecen metas acordadas entre estudiantes, educadores y familias para acompañar su progreso. Esto permite que el aprendizaje sea más relevante, desafiante y significativo.',
  },
  {
    q: '¿Cómo evalúan el aprendizaje? ',
    a: 'Evaluamos tanto el crecimiento académico como el desarrollo de habilidades esenciales como la autonomía, la comunicación, el pensamiento crítico y la colaboración mediante evidencias, proyectos y seguimiento continuo. Contamos con nuestra propia plataforma de medición donde se registra constantemente el progreso de los estudiantes.  ',
  },
  {
    q: '¿El colegio es bilingüe? ',
    a: 'Sí. Los estudiantes desarrollan competencias en inglés de manera progresiva a través de experiencias auténticas de aprendizaje y comunicación.',
  },
  {
    q: '¿Desde qué edad reciben estudiantes? ',
    a: 'En ReinventED Puembo recibimos estudiantes desde Nest (inicial 1). Nuestro colegio va creciendo año a año. En el periodo 2026-2027 nuestra oferta va hasta 10th grade (1ro de bachillerato). ',
  },
  {
    q: '¿Cómo puedo conocer el colegio? ',
    a: 'Puedes agendar una visita para recorrer nuestros espacios, conocer nuestra propuesta educativa y conversar con nuestro equipo. ',
  },
]
