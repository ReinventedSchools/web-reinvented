import imgPuemboHero from '../assets/sedes/puemboPrincipal.webp'
import imgPuemboLogo from '../assets/logos/puemboB.png'
import imgPuemboCampus from '../assets/sedes/puemboJardin.webp'

export const schools = {
  puembo: {
    slug: 'puembo',
    name: 'Puembo',
    heroImg: imgPuemboHero,
    logoImg: imgPuemboLogo,
    locImg:  imgPuemboCampus,
    ed: '#2bae8c',
    nameColor: '#7d8590',
    band: '#2bae8c',
    bandText: '#eafff7',
    arrow: 'purple',
    circle: '#2bae8c',
    since: 'Desde 2020',
    intro:
      'ReinventED Puembo fue el primer campus de la red. Nació en 2020, en medio de la pandemia, como una respuesta estructurada al contexto del momento y a la necesidad de repensar cómo debía diseñarse el aprendizaje. Pese a las restricciones y a un crecimiento sostenido pero intencional, cuidamos siempre lo más importante: proteger la personalización, la estructura del sistema y la calidad del acompañamiento.',
    locTitle: 'Ubicado en Puembo,',
    locText: [
      'el campus está rodeado de naturaleza y espacios abiertos que amplían las posibilidades de aprendizaje.',
      'La naturaleza es recurso pedagógico. El movimiento, la exploración y el contacto con el entorno forman parte de la experiencia diaria.',
      'El espacio físico acompaña al modelo: talleres abiertos, áreas colaborativas y ambientes diseñados para favorecer autonomía y concentración.',
    ],
    grades:
      '10th grade se abrirá en el período 2026 - 2027. 11th grade en el período 2027 - 2028 y 12th grade en 2028 - 2029.',
  },
  idv: {
    slug: 'idv',
    name: 'IDV',
    ed: '#4fa3d1',
    nameColor: '#e5007e',
    band: '#1b4a77',
    bandText: '#dce8f3',
    arrow: 'magenta',
    circle: '#1b4a77',
    since: 'Desde 2021',
    intro:
      'ReinventED IDV nació a partir de la alianza entre ReinventED Schools y el club Independiente del Valle, con un objetivo claro: integrar un sistema académico personalizado dentro de un entorno de alto rendimiento deportivo. Aquí la exigencia académica y la excelencia deportiva no compiten entre sí, sino que se fortalecen y permiten un desarrollo integral de los estudiantes. ReinventED IDV no es un colegio tradicional adaptado al deporte. Es la implementación del Sistema ReinventED dentro de un contexto de formación profesional, donde disciplina, estructura y autonomía son esenciales.',
    locTitle: 'El colegio opera dentro del complejo deportivo de Independiente del Valle,',
    locText: [
      'y es exclusivo para las formativas del equipo, lo que permite a los estudiantes estar cerca de sus entrenamientos y compromisos deportivos.',
      'Además, el plan de estudios flexible permite a los jóvenes futbolistas adaptarse a sus viajes y competencias internacionales sin interrumpir su proceso educativo.',
    ],
    grades:
      '9th grade se abrirá en el período 2026 - 2027. 10th, 11th y 12th grade se incorporarán de forma progresiva.',
  },
  'santa-clara': {
    slug: 'santa-clara',
    name: 'Santa Clara',
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
  },
  rimac: {
    slug: 'rimac',
    name: 'Rímac',
    ed: '#f4c20d',
    nameColor: '#4fa3d1',
    band: '#5b87a8',
    bandText: '#eaf2f8',
    arrow: 'yellow',
    circle: '#5b87a8',
    since: 'Desde 2024',
    intro:
      'ReinventED Rímac nace como una propuesta educativa innovadora para los futbolistas del Club Sporting Cristal, proporcionando un espacio con un sistema académico estructurado que les permite continuar su formación mientras desarrollan su carrera deportiva de alto rendimiento. Su apertura marca además la expansión regional de ReinventED desde Ecuador hacia Perú, consolidando un sistema educativo diseñado para adaptarse a nuevos contextos sin perder estructura, estándares ni enfoque en la autonomía.',
    locTitle: 'Ubicado en la Ciudad Deportiva La Florida,',
    locText: [
      'el colegio ofrece un modelo flexible que permite a los jóvenes deportistas adaptarse a sus viajes y competencias, sin que su educación se vea comprometida.',
      'El colegio sigue la propuesta educativa de ReinventED con un enfoque en el desarrollo de habilidades socioemocionales, autonomía y bilingüismo. El colegio se abrió en 2024.',
    ],
    grades:
      '9th grade abierto. 10th, 11th y 12th grade se incorporarán de forma progresiva según el crecimiento del campus.',
  },
}

export const stages = [
  { n: 1, name: 'Playschool',    grade: 'Nest, PreK, Kínder',  sub: '2 a 5 años',   color: '#7b6fcf' },
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
