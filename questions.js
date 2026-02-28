const CATEGORY_INFO = {
  cinematica: { icon: "\u{1F680}", name_pt: "Cinematica e Mecanica", name_en: "Kinematics & Mechanics" },
  energia: { icon: "\u26A1", name_pt: "Energia e Trabalho", name_en: "Energy & Work" },
  termodinamica: { icon: "\u{1F321}\uFE0F", name_pt: "Termodinamica", name_en: "Thermodynamics" },
  ondas: { icon: "\u{1F50A}", name_pt: "Ondas e Som", name_en: "Waves & Sound" },
  optica: { icon: "\u{1F526}", name_pt: "Optica", name_en: "Optics" },
  eletricidade: { icon: "\u{1F50C}", name_pt: "Eletricidade e Magnetismo", name_en: "Electricity & Magnetism" },
  moderna: { icon: "\u269B\uFE0F", name_pt: "Fisica Moderna", name_en: "Modern Physics" }
};

const QUESTIONS = [
  // ============================================================
  // CINEMATICA (10 questions: 4 easy, 4 medium, 2 hard)
  // ============================================================
  {
    id: 1,
    category: "cinematica",
    difficulty: "easy",
    question_pt: "Um carro percorre 100 km em 2 horas com velocidade constante. Qual e a velocidade media do carro?",
    question_en: "A car travels 100 km in 2 hours at constant speed. What is the average speed of the car?",
    options_pt: ["25 km/h", "50 km/h", "75 km/h", "200 km/h"],
    options_en: ["25 km/h", "50 km/h", "75 km/h", "200 km/h"],
    correct: 1,
    explanation_pt: "Velocidade media = distancia / tempo = 100 km / 2 h = 50 km/h.",
    explanation_en: "Average speed = distance / time = 100 km / 2 h = 50 km/h."
  },
  {
    id: 2,
    category: "cinematica",
    difficulty: "easy",
    question_pt: "No Movimento Retilineo Uniforme (MRU), o que permanece constante?",
    question_en: "In Uniform Rectilinear Motion (URM), what remains constant?",
    options_pt: ["A aceleracao", "A velocidade", "A forca resultante e diferente de zero", "A posicao"],
    options_en: ["The acceleration", "The velocity", "The net force is non-zero", "The position"],
    correct: 1,
    explanation_pt: "No MRU a velocidade e constante e a aceleracao e zero, pois nao ha variacao de velocidade.",
    explanation_en: "In URM the velocity is constant and the acceleration is zero, since there is no change in velocity."
  },
  {
    id: 3,
    category: "cinematica",
    difficulty: "easy",
    question_pt: "Qual e a aceleracao da gravidade aproximada na superficie da Terra?",
    question_en: "What is the approximate acceleration due to gravity at Earth's surface?",
    options_pt: ["5 m/s^2", "9,8 m/s^2", "15 m/s^2", "20 m/s^2"],
    options_en: ["5 m/s^2", "9.8 m/s^2", "15 m/s^2", "20 m/s^2"],
    correct: 1,
    explanation_pt: "A aceleracao gravitacional na superficie terrestre e aproximadamente 9,8 m/s^2, frequentemente arredondada para 10 m/s^2 em exercicios.",
    explanation_en: "The gravitational acceleration at Earth's surface is approximately 9.8 m/s^2, often rounded to 10 m/s^2 in exercises."
  },
  {
    id: 4,
    category: "cinematica",
    difficulty: "easy",
    question_pt: "A Primeira Lei de Newton (Lei da Inercia) afirma que um corpo em repouso:",
    question_en: "Newton's First Law (Law of Inertia) states that a body at rest:",
    options_pt: [
      "Sempre precisa de uma forca para permanecer em repouso",
      "Permanece em repouso a menos que uma forca resultante atue sobre ele",
      "Precisa de atrito para ficar parado",
      "Tem velocidade constante diferente de zero"
    ],
    options_en: [
      "Always needs a force to remain at rest",
      "Remains at rest unless a net force acts on it",
      "Needs friction to stay still",
      "Has a constant non-zero velocity"
    ],
    correct: 1,
    explanation_pt: "A Lei da Inercia diz que um corpo permanece em seu estado de repouso ou movimento retilineo uniforme a menos que uma forca resultante atue sobre ele.",
    explanation_en: "The Law of Inertia states that a body remains at rest or in uniform rectilinear motion unless a net force acts on it."
  },
  {
    id: 5,
    category: "cinematica",
    difficulty: "medium",
    question_pt: "Um objeto e lancado verticalmente para cima com velocidade inicial de 20 m/s. Considerando g = 10 m/s^2, qual e a altura maxima atingida?",
    question_en: "An object is thrown vertically upward with an initial speed of 20 m/s. Considering g = 10 m/s^2, what is the maximum height reached?",
    options_pt: ["10 m", "20 m", "30 m", "40 m"],
    options_en: ["10 m", "20 m", "30 m", "40 m"],
    correct: 1,
    explanation_pt: "Na altura maxima, v = 0. Usando v^2 = v0^2 - 2gH: 0 = 400 - 20H, logo H = 20 m.",
    explanation_en: "At maximum height, v = 0. Using v^2 = v0^2 - 2gH: 0 = 400 - 20H, so H = 20 m."
  },
  {
    id: 6,
    category: "cinematica",
    difficulty: "medium",
    question_pt: "Um corpo parte do repouso com aceleracao constante de 2 m/s^2. Qual e a distancia percorrida em 5 segundos?",
    question_en: "A body starts from rest with a constant acceleration of 2 m/s^2. What distance does it travel in 5 seconds?",
    options_pt: ["10 m", "15 m", "25 m", "50 m"],
    options_en: ["10 m", "15 m", "25 m", "50 m"],
    correct: 2,
    explanation_pt: "Usando S = v0*t + (a*t^2)/2 = 0 + (2 * 25)/2 = 25 m.",
    explanation_en: "Using S = v0*t + (a*t^2)/2 = 0 + (2 * 25)/2 = 25 m."
  },
  {
    id: 7,
    category: "cinematica",
    difficulty: "medium",
    question_pt: "Segundo a Segunda Lei de Newton, se a massa de um objeto e 5 kg e a aceleracao e 3 m/s^2, qual e a forca resultante?",
    question_en: "According to Newton's Second Law, if an object's mass is 5 kg and its acceleration is 3 m/s^2, what is the net force?",
    options_pt: ["1,67 N", "8 N", "15 N", "45 N"],
    options_en: ["1.67 N", "8 N", "15 N", "45 N"],
    correct: 2,
    explanation_pt: "Pela Segunda Lei de Newton, F = m * a = 5 * 3 = 15 N.",
    explanation_en: "By Newton's Second Law, F = m * a = 5 * 3 = 15 N."
  },
  {
    id: 8,
    category: "cinematica",
    difficulty: "medium",
    question_pt: "Um bloco de 10 kg esta sobre uma superficie horizontal com coeficiente de atrito cinetico de 0,3. Qual e a forca de atrito? (g = 10 m/s^2)",
    question_en: "A 10 kg block is on a horizontal surface with a kinetic friction coefficient of 0.3. What is the friction force? (g = 10 m/s^2)",
    options_pt: ["3 N", "10 N", "30 N", "100 N"],
    options_en: ["3 N", "10 N", "30 N", "100 N"],
    correct: 2,
    explanation_pt: "Forca de atrito = coeficiente * Normal = 0,3 * m * g = 0,3 * 10 * 10 = 30 N.",
    explanation_en: "Friction force = coefficient * Normal = 0.3 * m * g = 0.3 * 10 * 10 = 30 N."
  },
  {
    id: 9,
    category: "cinematica",
    difficulty: "hard",
    question_pt: "Um projetil e lancado com velocidade de 50 m/s a 30 graus com a horizontal. Qual e o alcance horizontal? (g = 10 m/s^2, sen60 = 0,87)",
    question_en: "A projectile is launched at 50 m/s at 30 degrees above the horizontal. What is the horizontal range? (g = 10 m/s^2, sin60 = 0.87)",
    options_pt: ["125 m", "217,5 m", "250 m", "500 m"],
    options_en: ["125 m", "217.5 m", "250 m", "500 m"],
    correct: 1,
    explanation_pt: "Alcance = (v0^2 * sen(2*theta)) / g = (2500 * sen60) / 10 = 2500 * 0,87 / 10 = 217,5 m.",
    explanation_en: "Range = (v0^2 * sin(2*theta)) / g = (2500 * sin60) / 10 = 2500 * 0.87 / 10 = 217.5 m."
  },
  {
    id: 10,
    category: "cinematica",
    difficulty: "hard",
    question_pt: "Dois blocos de massas 3 kg e 7 kg estao conectados por um fio ideal sobre uma superficie sem atrito. Uma forca de 50 N e aplicada no bloco de 7 kg. Qual e a tensao no fio entre os blocos?",
    question_en: "Two blocks of masses 3 kg and 7 kg are connected by an ideal string on a frictionless surface. A 50 N force is applied to the 7 kg block. What is the tension in the string?",
    options_pt: ["5 N", "15 N", "21 N", "35 N"],
    options_en: ["5 N", "15 N", "21 N", "35 N"],
    correct: 1,
    explanation_pt: "Aceleracao do sistema: a = F/(m1+m2) = 50/10 = 5 m/s^2. Tensao no fio: T = m1 * a = 3 * 5 = 15 N.",
    explanation_en: "System acceleration: a = F/(m1+m2) = 50/10 = 5 m/s^2. Tension in string: T = m1 * a = 3 * 5 = 15 N."
  },

  // ============================================================
  // ENERGIA (10 questions: 4 easy, 4 medium, 2 hard)
  // ============================================================
  {
    id: 11,
    category: "energia",
    difficulty: "easy",
    question_pt: "Qual e a unidade de energia no Sistema Internacional (SI)?",
    question_en: "What is the unit of energy in the International System (SI)?",
    options_pt: ["Watt", "Joule", "Newton", "Pascal"],
    options_en: ["Watt", "Joule", "Newton", "Pascal"],
    correct: 1,
    explanation_pt: "A unidade de energia no SI e o Joule (J). Watt e unidade de potencia, Newton de forca e Pascal de pressao.",
    explanation_en: "The SI unit of energy is the Joule (J). Watt is the unit of power, Newton of force, and Pascal of pressure."
  },
  {
    id: 12,
    category: "energia",
    difficulty: "easy",
    question_pt: "A energia cinetica de um corpo depende de:",
    question_en: "The kinetic energy of a body depends on:",
    options_pt: ["Massa e altura", "Massa e velocidade", "Altura e velocidade", "Forca e deslocamento"],
    options_en: ["Mass and height", "Mass and velocity", "Height and velocity", "Force and displacement"],
    correct: 1,
    explanation_pt: "A energia cinetica e dada por Ec = (1/2)*m*v^2, dependendo da massa e da velocidade do corpo.",
    explanation_en: "Kinetic energy is given by Ek = (1/2)*m*v^2, depending on the body's mass and velocity."
  },
  {
    id: 13,
    category: "energia",
    difficulty: "easy",
    question_pt: "Qual e a definicao de trabalho em fisica?",
    question_en: "What is the definition of work in physics?",
    options_pt: [
      "Forca multiplicada pelo tempo",
      "Forca multiplicada pelo deslocamento na direcao da forca",
      "Massa multiplicada pela aceleracao",
      "Energia dividida pelo tempo"
    ],
    options_en: [
      "Force multiplied by time",
      "Force multiplied by displacement in the direction of the force",
      "Mass multiplied by acceleration",
      "Energy divided by time"
    ],
    correct: 1,
    explanation_pt: "Trabalho e definido como W = F * d * cos(theta), onde theta e o angulo entre a forca e o deslocamento.",
    explanation_en: "Work is defined as W = F * d * cos(theta), where theta is the angle between force and displacement."
  },
  {
    id: 14,
    category: "energia",
    difficulty: "easy",
    question_pt: "Potencia e a grandeza que mede:",
    question_en: "Power is the quantity that measures:",
    options_pt: [
      "A quantidade total de energia",
      "A rapidez com que se realiza trabalho",
      "A forca aplicada sobre um corpo",
      "A variacao de energia potencial"
    ],
    options_en: [
      "The total amount of energy",
      "How quickly work is performed",
      "The force applied to a body",
      "The change in potential energy"
    ],
    correct: 1,
    explanation_pt: "Potencia e a taxa de realizacao de trabalho por unidade de tempo: P = W/t. Sua unidade no SI e o Watt.",
    explanation_en: "Power is the rate of doing work per unit time: P = W/t. Its SI unit is the Watt."
  },
  {
    id: 15,
    category: "energia",
    difficulty: "medium",
    question_pt: "Um corpo de 4 kg esta a uma altura de 10 m do solo. Qual e sua energia potencial gravitacional? (g = 10 m/s^2)",
    question_en: "A 4 kg body is at a height of 10 m above the ground. What is its gravitational potential energy? (g = 10 m/s^2)",
    options_pt: ["40 J", "100 J", "400 J", "4000 J"],
    options_en: ["40 J", "100 J", "400 J", "4000 J"],
    correct: 2,
    explanation_pt: "Energia potencial gravitacional: Ep = m * g * h = 4 * 10 * 10 = 400 J.",
    explanation_en: "Gravitational potential energy: Ep = m * g * h = 4 * 10 * 10 = 400 J."
  },
  {
    id: 16,
    category: "energia",
    difficulty: "medium",
    question_pt: "Uma forca de 20 N desloca um objeto por 5 m na mesma direcao da forca. Qual e o trabalho realizado?",
    question_en: "A force of 20 N moves an object 5 m in the same direction as the force. What is the work done?",
    options_pt: ["4 J", "25 J", "100 J", "500 J"],
    options_en: ["4 J", "25 J", "100 J", "500 J"],
    correct: 2,
    explanation_pt: "Trabalho = F * d * cos(0) = 20 * 5 * 1 = 100 J. Como a forca e o deslocamento tem a mesma direcao, cos(0) = 1.",
    explanation_en: "Work = F * d * cos(0) = 20 * 5 * 1 = 100 J. Since force and displacement are in the same direction, cos(0) = 1."
  },
  {
    id: 17,
    category: "energia",
    difficulty: "medium",
    question_pt: "Uma maquina realiza um trabalho de 600 J em 30 segundos. Qual e a potencia dessa maquina?",
    question_en: "A machine performs 600 J of work in 30 seconds. What is the power of this machine?",
    options_pt: ["10 W", "20 W", "200 W", "18000 W"],
    options_en: ["10 W", "20 W", "200 W", "18000 W"],
    correct: 1,
    explanation_pt: "Potencia = Trabalho / Tempo = 600 / 30 = 20 W.",
    explanation_en: "Power = Work / Time = 600 / 30 = 20 W."
  },
  {
    id: 18,
    category: "energia",
    difficulty: "medium",
    question_pt: "Qual e a energia cinetica de um corpo de 2 kg movendo-se a 6 m/s?",
    question_en: "What is the kinetic energy of a 2 kg body moving at 6 m/s?",
    options_pt: ["6 J", "12 J", "36 J", "72 J"],
    options_en: ["6 J", "12 J", "36 J", "72 J"],
    correct: 2,
    explanation_pt: "Ec = (1/2)*m*v^2 = (1/2)*2*36 = 36 J.",
    explanation_en: "Ek = (1/2)*m*v^2 = (1/2)*2*36 = 36 J."
  },
  {
    id: 19,
    category: "energia",
    difficulty: "hard",
    question_pt: "Um corpo de 5 kg e solto do repouso a uma altura de 20 m. Desprezando a resistencia do ar, qual e sua velocidade ao atingir o solo? (g = 10 m/s^2)",
    question_en: "A 5 kg body is released from rest at a height of 20 m. Ignoring air resistance, what is its speed when it hits the ground? (g = 10 m/s^2)",
    options_pt: ["10 m/s", "14 m/s", "20 m/s", "40 m/s"],
    options_en: ["10 m/s", "14 m/s", "20 m/s", "40 m/s"],
    correct: 2,
    explanation_pt: "Pela conservacao de energia: mgh = (1/2)mv^2, logo v = sqrt(2*g*h) = sqrt(2*10*20) = sqrt(400) = 20 m/s.",
    explanation_en: "By conservation of energy: mgh = (1/2)mv^2, so v = sqrt(2*g*h) = sqrt(2*10*20) = sqrt(400) = 20 m/s."
  },
  {
    id: 20,
    category: "energia",
    difficulty: "hard",
    question_pt: "Uma mola de constante elastica 200 N/m e comprimida 0,3 m. Um bloco de 0,1 kg e lancado por essa mola numa superficie sem atrito. Qual e a velocidade do bloco ao ser liberado?",
    question_en: "A spring with spring constant 200 N/m is compressed 0.3 m. A 0.1 kg block is launched by this spring on a frictionless surface. What is the block's speed upon release?",
    options_pt: ["3 m/s", "9 m/s", "~13,4 m/s", "30 m/s"],
    options_en: ["3 m/s", "9 m/s", "~13.4 m/s", "30 m/s"],
    correct: 2,
    explanation_pt: "Energia elastica = Energia cinetica: (1/2)*k*x^2 = (1/2)*m*v^2. Assim, v = sqrt(k*x^2/m) = sqrt(200*0,09/0,1) = sqrt(180) = 13,4 m/s.",
    explanation_en: "Elastic energy = Kinetic energy: (1/2)*k*x^2 = (1/2)*m*v^2. So v = sqrt(k*x^2/m) = sqrt(200*0.09/0.1) = sqrt(180) = 13.4 m/s."
  },

  // ============================================================
  // TERMODINAMICA (10 questions: 4 easy, 4 medium, 2 hard)
  // ============================================================
  {
    id: 21,
    category: "termodinamica",
    difficulty: "easy",
    question_pt: "Qual e o ponto de ebulicao da agua ao nivel do mar em graus Celsius?",
    question_en: "What is the boiling point of water at sea level in degrees Celsius?",
    options_pt: ["0 C", "37 C", "100 C", "212 C"],
    options_en: ["0 C", "37 C", "100 C", "212 C"],
    correct: 2,
    explanation_pt: "A agua ferve a 100 graus Celsius (212 F) ao nivel do mar sob pressao atmosferica normal.",
    explanation_en: "Water boils at 100 degrees Celsius (212 F) at sea level under normal atmospheric pressure."
  },
  {
    id: 22,
    category: "termodinamica",
    difficulty: "easy",
    question_pt: "O calor se propaga no vacuo por qual processo?",
    question_en: "Heat propagates through a vacuum by which process?",
    options_pt: ["Conducao", "Conveccao", "Irradiacao", "Conducao e conveccao"],
    options_en: ["Conduction", "Convection", "Radiation", "Conduction and convection"],
    correct: 2,
    explanation_pt: "No vacuo, o calor se propaga apenas por irradiacao (ondas eletromagneticas). Conducao e conveccao necessitam de meio material.",
    explanation_en: "In a vacuum, heat propagates only by radiation (electromagnetic waves). Conduction and convection require a material medium."
  },
  {
    id: 23,
    category: "termodinamica",
    difficulty: "easy",
    question_pt: "Quando aquecemos uma barra metalica, ela sofre dilatacao. Isso ocorre porque:",
    question_en: "When we heat a metal bar, it undergoes expansion. This happens because:",
    options_pt: [
      "As moleculas perdem energia",
      "As moleculas se agitam mais e aumentam a distancia media entre elas",
      "O metal absorve materia do ambiente",
      "A massa da barra aumenta"
    ],
    options_en: [
      "The molecules lose energy",
      "The molecules vibrate more and increase their average distance",
      "The metal absorbs matter from the environment",
      "The bar's mass increases"
    ],
    correct: 1,
    explanation_pt: "Com o aumento da temperatura, a agitacao termica das moleculas cresce, aumentando a distancia media entre elas e causando a dilatacao.",
    explanation_en: "As temperature increases, the thermal agitation of molecules grows, increasing their average distance and causing expansion."
  },
  {
    id: 24,
    category: "termodinamica",
    difficulty: "easy",
    question_pt: "O zero absoluto corresponde a qual temperatura na escala Celsius?",
    question_en: "Absolute zero corresponds to what temperature on the Celsius scale?",
    options_pt: ["-100 C", "-273 C", "0 C", "-460 C"],
    options_en: ["-100 C", "-273 C", "0 C", "-460 C"],
    correct: 1,
    explanation_pt: "O zero absoluto e 0 K, que equivale a -273,15 C (aproximadamente -273 C). E a menor temperatura teoricamente possivel.",
    explanation_en: "Absolute zero is 0 K, which equals -273.15 C (approximately -273 C). It is the lowest theoretically possible temperature."
  },
  {
    id: 25,
    category: "termodinamica",
    difficulty: "medium",
    question_pt: "Qual a quantidade de calor necessaria para aquecer 500 g de agua de 20 C a 80 C? (calor especifico da agua = 1 cal/g.C)",
    question_en: "How much heat is needed to warm 500 g of water from 20 C to 80 C? (specific heat of water = 1 cal/g.C)",
    options_pt: ["3000 cal", "10000 cal", "30000 cal", "40000 cal"],
    options_en: ["3000 cal", "10000 cal", "30000 cal", "40000 cal"],
    correct: 2,
    explanation_pt: "Q = m * c * deltaT = 500 * 1 * (80 - 20) = 500 * 60 = 30000 cal.",
    explanation_en: "Q = m * c * deltaT = 500 * 1 * (80 - 20) = 500 * 60 = 30000 cal."
  },
  {
    id: 26,
    category: "termodinamica",
    difficulty: "medium",
    question_pt: "A Primeira Lei da Termodinamica e essencialmente uma aplicacao do principio de:",
    question_en: "The First Law of Thermodynamics is essentially an application of the principle of:",
    options_pt: [
      "Conservacao do momento",
      "Conservacao da energia",
      "Aumento da entropia",
      "Acao e reacao"
    ],
    options_en: [
      "Conservation of momentum",
      "Conservation of energy",
      "Increase of entropy",
      "Action and reaction"
    ],
    correct: 1,
    explanation_pt: "A Primeira Lei da Termodinamica (deltaU = Q - W) expressa a conservacao de energia: a energia interna varia conforme o calor trocado e o trabalho realizado.",
    explanation_en: "The First Law of Thermodynamics (deltaU = Q - W) expresses conservation of energy: internal energy changes according to heat exchanged and work performed."
  },
  {
    id: 27,
    category: "termodinamica",
    difficulty: "medium",
    question_pt: "Uma barra de ferro tem comprimento de 2 m a 20 C. Sabendo que o coeficiente de dilatacao linear do ferro e 12 x 10^-6 /C, qual sera o alongamento ao ser aquecida para 120 C?",
    question_en: "An iron bar is 2 m long at 20 C. Given that the linear expansion coefficient of iron is 12 x 10^-6 /C, what will be the elongation when heated to 120 C?",
    options_pt: ["0,24 mm", "1,2 mm", "2,4 mm", "24 mm"],
    options_en: ["0.24 mm", "1.2 mm", "2.4 mm", "24 mm"],
    correct: 2,
    explanation_pt: "deltaL = L0 * alpha * deltaT = 2 * 12 x 10^-6 * 100 = 2400 x 10^-6 m = 2,4 mm.",
    explanation_en: "deltaL = L0 * alpha * deltaT = 2 * 12 x 10^-6 * 100 = 2400 x 10^-6 m = 2.4 mm."
  },
  {
    id: 28,
    category: "termodinamica",
    difficulty: "medium",
    question_pt: "Em uma transformacao adiabatica de um gas ideal:",
    question_en: "In an adiabatic process of an ideal gas:",
    options_pt: [
      "A temperatura permanece constante",
      "Nao ha troca de calor com o ambiente",
      "O volume permanece constante",
      "A pressao permanece constante"
    ],
    options_en: [
      "The temperature remains constant",
      "There is no heat exchange with the surroundings",
      "The volume remains constant",
      "The pressure remains constant"
    ],
    correct: 1,
    explanation_pt: "Em uma transformacao adiabatica, Q = 0, ou seja, nao ha troca de calor entre o sistema e o ambiente.",
    explanation_en: "In an adiabatic process, Q = 0, meaning there is no heat exchange between the system and its surroundings."
  },
  {
    id: 29,
    category: "termodinamica",
    difficulty: "hard",
    question_pt: "Uma maquina termica opera entre as temperaturas de 600 K (fonte quente) e 300 K (fonte fria). Qual e o rendimento maximo teorico dessa maquina (ciclo de Carnot)?",
    question_en: "A heat engine operates between temperatures of 600 K (hot source) and 300 K (cold source). What is the maximum theoretical efficiency of this engine (Carnot cycle)?",
    options_pt: ["25%", "33%", "50%", "75%"],
    options_en: ["25%", "33%", "50%", "75%"],
    correct: 2,
    explanation_pt: "Rendimento de Carnot = 1 - Tfria/Tquente = 1 - 300/600 = 1 - 0,5 = 0,5 = 50%.",
    explanation_en: "Carnot efficiency = 1 - Tcold/Thot = 1 - 300/600 = 1 - 0.5 = 0.5 = 50%."
  },
  {
    id: 30,
    category: "termodinamica",
    difficulty: "hard",
    question_pt: "Um gas ideal sofre uma expansao isotermica. Sobre esse processo, e correto afirmar que:",
    question_en: "An ideal gas undergoes an isothermal expansion. Regarding this process, it is correct to state that:",
    options_pt: [
      "A energia interna do gas aumenta",
      "O gas realiza trabalho e absorve calor equivalente do ambiente",
      "Nao ha troca de calor com o ambiente",
      "A pressao do gas aumenta"
    ],
    options_en: [
      "The internal energy of the gas increases",
      "The gas does work and absorbs an equivalent amount of heat from the surroundings",
      "There is no heat exchange with the surroundings",
      "The pressure of the gas increases"
    ],
    correct: 1,
    explanation_pt: "Em uma expansao isotermica de gas ideal, a temperatura e constante, logo deltaU = 0. Pela 1a Lei: Q = W. O gas absorve calor igual ao trabalho realizado.",
    explanation_en: "In an isothermal expansion of an ideal gas, temperature is constant, so deltaU = 0. By the 1st Law: Q = W. The gas absorbs heat equal to the work done."
  },

  // ============================================================
  // ONDAS (10 questions: 4 easy, 4 medium, 2 hard)
  // ============================================================
  {
    id: 31,
    category: "ondas",
    difficulty: "easy",
    question_pt: "O som e uma onda:",
    question_en: "Sound is a wave that is:",
    options_pt: ["Eletromagnetica", "Transversal", "Longitudinal", "Estacionaria"],
    options_en: ["Electromagnetic", "Transverse", "Longitudinal", "Standing"],
    correct: 2,
    explanation_pt: "O som e uma onda mecanica longitudinal: as particulas do meio vibram na mesma direcao de propagacao da onda.",
    explanation_en: "Sound is a longitudinal mechanical wave: particles of the medium vibrate in the same direction as wave propagation."
  },
  {
    id: 32,
    category: "ondas",
    difficulty: "easy",
    question_pt: "A frequencia de uma onda e medida em:",
    question_en: "The frequency of a wave is measured in:",
    options_pt: ["Metros", "Segundos", "Hertz", "Metros por segundo"],
    options_en: ["Meters", "Seconds", "Hertz", "Meters per second"],
    correct: 2,
    explanation_pt: "A frequencia e medida em Hertz (Hz), que corresponde ao numero de oscilacoes por segundo.",
    explanation_en: "Frequency is measured in Hertz (Hz), which corresponds to the number of oscillations per second."
  },
  {
    id: 33,
    category: "ondas",
    difficulty: "easy",
    question_pt: "O que acontece com o som quando ele passa do ar para a agua?",
    question_en: "What happens to sound when it passes from air to water?",
    options_pt: [
      "A velocidade diminui",
      "A velocidade aumenta",
      "A frequencia muda",
      "O som nao se propaga na agua"
    ],
    options_en: [
      "The speed decreases",
      "The speed increases",
      "The frequency changes",
      "Sound does not propagate in water"
    ],
    correct: 1,
    explanation_pt: "O som viaja mais rapido em meios mais densos como a agua (~1500 m/s) do que no ar (~340 m/s). A frequencia permanece a mesma.",
    explanation_en: "Sound travels faster in denser media like water (~1500 m/s) than in air (~340 m/s). The frequency remains the same."
  },
  {
    id: 34,
    category: "ondas",
    difficulty: "easy",
    question_pt: "Qual fenomeno explica o eco?",
    question_en: "Which phenomenon explains echo?",
    options_pt: ["Refracao", "Reflexao", "Difracao", "Interferencia"],
    options_en: ["Refraction", "Reflection", "Diffraction", "Interference"],
    correct: 1,
    explanation_pt: "O eco e produzido pela reflexao do som em superficies distantes. Para que o eco seja percebido, o obstaculo deve estar a pelo menos ~17 m de distancia.",
    explanation_en: "Echo is produced by the reflection of sound off distant surfaces. For echo to be perceived, the obstacle must be at least ~17 m away."
  },
  {
    id: 35,
    category: "ondas",
    difficulty: "medium",
    question_pt: "Uma onda tem frequencia de 500 Hz e comprimento de onda de 0,68 m. Qual e a velocidade dessa onda?",
    question_en: "A wave has a frequency of 500 Hz and a wavelength of 0.68 m. What is the speed of this wave?",
    options_pt: ["170 m/s", "340 m/s", "500 m/s", "735 m/s"],
    options_en: ["170 m/s", "340 m/s", "500 m/s", "735 m/s"],
    correct: 1,
    explanation_pt: "Velocidade da onda: v = f * lambda = 500 * 0,68 = 340 m/s.",
    explanation_en: "Wave speed: v = f * lambda = 500 * 0.68 = 340 m/s."
  },
  {
    id: 36,
    category: "ondas",
    difficulty: "medium",
    question_pt: "O efeito Doppler explica por que:",
    question_en: "The Doppler effect explains why:",
    options_pt: [
      "O som nao se propaga no vacuo",
      "A frequencia percebida muda quando a fonte ou o observador estao em movimento relativo",
      "As ondas de luz podem ser polarizadas",
      "Ondas podem se cancelar mutuamente"
    ],
    options_en: [
      "Sound does not propagate in a vacuum",
      "The perceived frequency changes when the source or observer are in relative motion",
      "Light waves can be polarized",
      "Waves can cancel each other"
    ],
    correct: 1,
    explanation_pt: "O efeito Doppler descreve a mudanca na frequencia percebida quando ha movimento relativo entre a fonte e o observador.",
    explanation_en: "The Doppler effect describes the change in perceived frequency when there is relative motion between source and observer."
  },
  {
    id: 37,
    category: "ondas",
    difficulty: "medium",
    question_pt: "Ressonancia ocorre quando:",
    question_en: "Resonance occurs when:",
    options_pt: [
      "Duas ondas se cancelam completamente",
      "A frequencia da forca externa iguala a frequencia natural do sistema",
      "A onda muda de meio de propagacao",
      "A amplitude da onda diminui"
    ],
    options_en: [
      "Two waves cancel completely",
      "The frequency of the external force equals the natural frequency of the system",
      "The wave changes propagation medium",
      "The wave amplitude decreases"
    ],
    correct: 1,
    explanation_pt: "Ressonancia ocorre quando um sistema e excitado na sua frequencia natural, causando aumento maximo de amplitude.",
    explanation_en: "Resonance occurs when a system is excited at its natural frequency, causing maximum amplitude increase."
  },
  {
    id: 38,
    category: "ondas",
    difficulty: "medium",
    question_pt: "Uma onda periodica tem periodo de 0,02 s. Qual e a sua frequencia?",
    question_en: "A periodic wave has a period of 0.02 s. What is its frequency?",
    options_pt: ["0,02 Hz", "20 Hz", "50 Hz", "500 Hz"],
    options_en: ["0.02 Hz", "20 Hz", "50 Hz", "500 Hz"],
    correct: 2,
    explanation_pt: "Frequencia = 1 / Periodo = 1 / 0,02 = 50 Hz.",
    explanation_en: "Frequency = 1 / Period = 1 / 0.02 = 50 Hz."
  },
  {
    id: 39,
    category: "ondas",
    difficulty: "hard",
    question_pt: "Uma ambulancia se aproxima de um observador parado emitindo uma sirene de 700 Hz a uma velocidade de 34 m/s. Qual a frequencia percebida pelo observador? (velocidade do som = 340 m/s)",
    question_en: "An ambulance approaches a stationary observer emitting a 700 Hz siren at a speed of 34 m/s. What frequency does the observer perceive? (speed of sound = 340 m/s)",
    options_pt: ["636 Hz", "700 Hz", "770 Hz", "~778 Hz"],
    options_en: ["636 Hz", "700 Hz", "770 Hz", "~778 Hz"],
    correct: 3,
    explanation_pt: "Efeito Doppler (fonte se aproximando): f' = f * v / (v - vs) = 700 * 340 / (340 - 34) = 700 * 340 / 306 = 777,8 Hz.",
    explanation_en: "Doppler effect (approaching source): f' = f * v / (v - vs) = 700 * 340 / (340 - 34) = 700 * 340 / 306 = 777.8 Hz."
  },
  {
    id: 40,
    category: "ondas",
    difficulty: "hard",
    question_pt: "Em uma corda de 1,2 m fixada nas duas extremidades, formam-se ondas estacionarias com 3 ventres. Qual e o comprimento de onda dessa onda estacionaria?",
    question_en: "On a 1.2 m string fixed at both ends, standing waves form with 3 antinodes. What is the wavelength of this standing wave?",
    options_pt: ["0,4 m", "0,6 m", "0,8 m", "1,2 m"],
    options_en: ["0.4 m", "0.6 m", "0.8 m", "1.2 m"],
    correct: 2,
    explanation_pt: "Com 3 ventres (3o harmonico), L = 3*(lambda/2). Logo lambda = 2L/3 = 2*1,2/3 = 0,8 m.",
    explanation_en: "With 3 antinodes (3rd harmonic), L = 3*(lambda/2). So lambda = 2L/3 = 2*1.2/3 = 0.8 m."
  },

  // ============================================================
  // OPTICA (10 questions: 4 easy, 4 medium, 2 hard)
  // ============================================================
  {
    id: 41,
    category: "optica",
    difficulty: "easy",
    question_pt: "Qual e a velocidade aproximada da luz no vacuo?",
    question_en: "What is the approximate speed of light in a vacuum?",
    options_pt: ["3 x 10^6 m/s", "3 x 10^8 m/s", "3 x 10^10 m/s", "3 x 10^12 m/s"],
    options_en: ["3 x 10^6 m/s", "3 x 10^8 m/s", "3 x 10^10 m/s", "3 x 10^12 m/s"],
    correct: 1,
    explanation_pt: "A velocidade da luz no vacuo e aproximadamente 3 x 10^8 m/s (300.000 km/s).",
    explanation_en: "The speed of light in a vacuum is approximately 3 x 10^8 m/s (300,000 km/s)."
  },
  {
    id: 42,
    category: "optica",
    difficulty: "easy",
    question_pt: "Um espelho plano produz uma imagem que e:",
    question_en: "A plane mirror produces an image that is:",
    options_pt: [
      "Real e invertida",
      "Virtual, direita e do mesmo tamanho do objeto",
      "Real e do mesmo tamanho",
      "Virtual e menor que o objeto"
    ],
    options_en: [
      "Real and inverted",
      "Virtual, upright and the same size as the object",
      "Real and the same size",
      "Virtual and smaller than the object"
    ],
    correct: 1,
    explanation_pt: "Um espelho plano produz uma imagem virtual (formada atras do espelho), direita e do mesmo tamanho do objeto.",
    explanation_en: "A plane mirror produces a virtual image (formed behind the mirror), upright and the same size as the object."
  },
  {
    id: 43,
    category: "optica",
    difficulty: "easy",
    question_pt: "A decomposicao da luz branca em varias cores por um prisma e chamada de:",
    question_en: "The decomposition of white light into various colors by a prism is called:",
    options_pt: ["Reflexao", "Difracao", "Dispersao", "Polarizacao"],
    options_en: ["Reflection", "Diffraction", "Dispersion", "Polarization"],
    correct: 2,
    explanation_pt: "A dispersao ocorre porque cada cor tem um indice de refracao ligeiramente diferente no prisma, separando a luz branca em suas cores componentes.",
    explanation_en: "Dispersion occurs because each color has a slightly different refractive index in the prism, separating white light into its component colors."
  },
  {
    id: 44,
    category: "optica",
    difficulty: "easy",
    question_pt: "Uma pessoa miope tem dificuldade de enxergar objetos:",
    question_en: "A nearsighted person has difficulty seeing objects:",
    options_pt: ["Proximos", "Distantes", "Coloridos", "Pequenos"],
    options_en: ["Close", "Far away", "Colored", "Small"],
    correct: 1,
    explanation_pt: "Na miopia, a imagem se forma antes da retina, dificultando a visao de objetos distantes. A correcao e feita com lentes divergentes.",
    explanation_en: "In myopia, the image forms in front of the retina, making it difficult to see distant objects. It is corrected with diverging lenses."
  },
  {
    id: 45,
    category: "optica",
    difficulty: "medium",
    question_pt: "A Lei de Snell-Descartes (n1*sen(theta1) = n2*sen(theta2)) descreve o fenomeno da:",
    question_en: "Snell's Law (n1*sin(theta1) = n2*sin(theta2)) describes the phenomenon of:",
    options_pt: ["Reflexao", "Refracao", "Difracao", "Interferencia"],
    options_en: ["Reflection", "Refraction", "Diffraction", "Interference"],
    correct: 1,
    explanation_pt: "A Lei de Snell-Descartes relaciona os angulos de incidencia e refracao quando a luz passa de um meio para outro com indice de refracao diferente.",
    explanation_en: "Snell's Law relates the angles of incidence and refraction when light passes from one medium to another with a different refractive index."
  },
  {
    id: 46,
    category: "optica",
    difficulty: "medium",
    question_pt: "Uma lente convergente e usada para corrigir qual defeito de visao?",
    question_en: "A converging lens is used to correct which vision defect?",
    options_pt: ["Miopia", "Hipermetropia", "Astigmatismo", "Daltonismo"],
    options_en: ["Myopia", "Hyperopia (farsightedness)", "Astigmatism", "Color blindness"],
    correct: 1,
    explanation_pt: "Na hipermetropia, a imagem se forma atras da retina. Uma lente convergente ajuda a focalizar a imagem sobre a retina.",
    explanation_en: "In hyperopia, the image forms behind the retina. A converging lens helps focus the image onto the retina."
  },
  {
    id: 47,
    category: "optica",
    difficulty: "medium",
    question_pt: "Um espelho concavo tem distancia focal de 20 cm. Um objeto e colocado a 30 cm do espelho. A imagem formada e:",
    question_en: "A concave mirror has a focal length of 20 cm. An object is placed 30 cm from the mirror. The image formed is:",
    options_pt: [
      "Virtual e menor",
      "Real, invertida e maior",
      "Virtual e maior",
      "Real, invertida e menor"
    ],
    options_en: [
      "Virtual and smaller",
      "Real, inverted and larger",
      "Virtual and larger",
      "Real, inverted and smaller"
    ],
    correct: 1,
    explanation_pt: "Usando 1/f = 1/do + 1/di: 1/20 = 1/30 + 1/di, logo di = 60 cm. A ampliacao M = -di/do = -60/30 = -2. A imagem e real, invertida e 2x maior.",
    explanation_en: "Using 1/f = 1/do + 1/di: 1/20 = 1/30 + 1/di, so di = 60 cm. Magnification M = -di/do = -60/30 = -2. The image is real, inverted and 2x larger."
  },
  {
    id: 48,
    category: "optica",
    difficulty: "medium",
    question_pt: "O indice de refracao de um meio e definido como:",
    question_en: "The refractive index of a medium is defined as:",
    options_pt: [
      "A velocidade da luz no meio dividida pela velocidade da luz no vacuo",
      "A velocidade da luz no vacuo dividida pela velocidade da luz no meio",
      "A frequencia da luz no meio",
      "O comprimento de onda da luz no meio"
    ],
    options_en: [
      "The speed of light in the medium divided by the speed of light in vacuum",
      "The speed of light in vacuum divided by the speed of light in the medium",
      "The frequency of light in the medium",
      "The wavelength of light in the medium"
    ],
    correct: 1,
    explanation_pt: "O indice de refracao n = c/v, onde c e a velocidade da luz no vacuo e v e a velocidade da luz no meio. Quanto maior n, mais a luz e desacelerada.",
    explanation_en: "The refractive index n = c/v, where c is the speed of light in vacuum and v is the speed in the medium. The higher n, the more light is slowed."
  },
  {
    id: 49,
    category: "optica",
    difficulty: "hard",
    question_pt: "A reflexao interna total ocorre quando a luz passa de um meio mais refringente para um menos refringente e o angulo de incidencia e:",
    question_en: "Total internal reflection occurs when light passes from a denser to a less dense medium and the angle of incidence is:",
    options_pt: [
      "Igual a zero",
      "Menor que o angulo critico",
      "Maior que o angulo critico",
      "Igual a 90 graus"
    ],
    options_en: [
      "Equal to zero",
      "Less than the critical angle",
      "Greater than the critical angle",
      "Equal to 90 degrees"
    ],
    correct: 2,
    explanation_pt: "A reflexao interna total ocorre quando o angulo de incidencia e maior que o angulo critico. Nesse caso, toda a luz e refletida de volta ao meio mais refringente.",
    explanation_en: "Total internal reflection occurs when the angle of incidence is greater than the critical angle. In this case, all light is reflected back into the denser medium."
  },
  {
    id: 50,
    category: "optica",
    difficulty: "hard",
    question_pt: "Uma lente delgada convergente tem distancia focal de 10 cm. Um objeto de 3 cm de altura e colocado a 15 cm da lente. Qual e a altura da imagem?",
    question_en: "A thin converging lens has a focal length of 10 cm. A 3 cm tall object is placed 15 cm from the lens. What is the height of the image?",
    options_pt: ["2 cm", "3 cm", "6 cm", "9 cm"],
    options_en: ["2 cm", "3 cm", "6 cm", "9 cm"],
    correct: 2,
    explanation_pt: "1/f = 1/do + 1/di: 1/10 = 1/15 + 1/di, logo 1/di = 1/10 - 1/15 = 1/30, di = 30 cm. Ampliacao |M| = di/do = 30/15 = 2. Altura da imagem = 2 * 3 = 6 cm.",
    explanation_en: "1/f = 1/do + 1/di: 1/10 = 1/15 + 1/di, so 1/di = 1/10 - 1/15 = 1/30, di = 30 cm. Magnification |M| = di/do = 30/15 = 2. Image height = 2 * 3 = 6 cm."
  },

  // ============================================================
  // ELETRICIDADE (10 questions: 4 easy, 4 medium, 2 hard)
  // ============================================================
  {
    id: 51,
    category: "eletricidade",
    difficulty: "easy",
    question_pt: "Qual e a unidade de corrente eletrica no SI?",
    question_en: "What is the SI unit of electric current?",
    options_pt: ["Volt", "Ampere", "Ohm", "Coulomb"],
    options_en: ["Volt", "Ampere", "Ohm", "Coulomb"],
    correct: 1,
    explanation_pt: "A unidade de corrente eletrica no SI e o Ampere (A). Volt mede tensao, Ohm mede resistencia e Coulomb mede carga eletrica.",
    explanation_en: "The SI unit of electric current is the Ampere (A). Volt measures voltage, Ohm measures resistance, and Coulomb measures electric charge."
  },
  {
    id: 52,
    category: "eletricidade",
    difficulty: "easy",
    question_pt: "Cargas eletricas de mesmo sinal se:",
    question_en: "Electric charges of the same sign:",
    options_pt: ["Atraem", "Repelem", "Anulam", "Nao interagem"],
    options_en: ["Attract", "Repel", "Cancel out", "Do not interact"],
    correct: 1,
    explanation_pt: "Cargas de mesmo sinal se repelem e cargas de sinais opostos se atraem. Este e um principio fundamental da eletrostatica.",
    explanation_en: "Like charges repel and opposite charges attract. This is a fundamental principle of electrostatics."
  },
  {
    id: 53,
    category: "eletricidade",
    difficulty: "easy",
    question_pt: "A Lei de Ohm relaciona:",
    question_en: "Ohm's Law relates:",
    options_pt: [
      "Massa, forca e aceleracao",
      "Tensao, corrente e resistencia",
      "Carga, tempo e energia",
      "Potencia, corrente e tempo"
    ],
    options_en: [
      "Mass, force and acceleration",
      "Voltage, current and resistance",
      "Charge, time and energy",
      "Power, current and time"
    ],
    correct: 1,
    explanation_pt: "A Lei de Ohm afirma que V = R * I, onde V e a tensao, R e a resistencia e I e a corrente eletrica.",
    explanation_en: "Ohm's Law states that V = R * I, where V is voltage, R is resistance, and I is the electric current."
  },
  {
    id: 54,
    category: "eletricidade",
    difficulty: "easy",
    question_pt: "Um material que conduz bem a eletricidade e chamado de:",
    question_en: "A material that conducts electricity well is called a:",
    options_pt: ["Isolante", "Semicondutor", "Condutor", "Supercondutor apenas"],
    options_en: ["Insulator", "Semiconductor", "Conductor", "Superconductor only"],
    correct: 2,
    explanation_pt: "Condutores sao materiais que permitem o fluxo facil de corrente eletrica, como os metais (cobre, aluminio, ouro).",
    explanation_en: "Conductors are materials that allow easy flow of electric current, such as metals (copper, aluminum, gold)."
  },
  {
    id: 55,
    category: "eletricidade",
    difficulty: "medium",
    question_pt: "Um resistor de 10 Ohms esta submetido a uma tensao de 20 V. Qual e a corrente eletrica que passa por ele?",
    question_en: "A 10 Ohm resistor has a voltage of 20 V across it. What is the electric current through it?",
    options_pt: ["0,5 A", "2 A", "10 A", "200 A"],
    options_en: ["0.5 A", "2 A", "10 A", "200 A"],
    correct: 1,
    explanation_pt: "Pela Lei de Ohm: I = V / R = 20 / 10 = 2 A.",
    explanation_en: "By Ohm's Law: I = V / R = 20 / 10 = 2 A."
  },
  {
    id: 56,
    category: "eletricidade",
    difficulty: "medium",
    question_pt: "Dois resistores de 6 Ohms estao ligados em paralelo. Qual e a resistencia equivalente?",
    question_en: "Two 6 Ohm resistors are connected in parallel. What is the equivalent resistance?",
    options_pt: ["2 Ohms", "3 Ohms", "6 Ohms", "12 Ohms"],
    options_en: ["2 Ohms", "3 Ohms", "6 Ohms", "12 Ohms"],
    correct: 1,
    explanation_pt: "Em paralelo: 1/Req = 1/R1 + 1/R2 = 1/6 + 1/6 = 2/6. Logo Req = 6/2 = 3 Ohms.",
    explanation_en: "In parallel: 1/Req = 1/R1 + 1/R2 = 1/6 + 1/6 = 2/6. So Req = 6/2 = 3 Ohms."
  },
  {
    id: 57,
    category: "eletricidade",
    difficulty: "medium",
    question_pt: "Qual e a potencia dissipada por um resistor de 4 Ohms com corrente de 3 A?",
    question_en: "What is the power dissipated by a 4 Ohm resistor carrying 3 A?",
    options_pt: ["12 W", "36 W", "48 W", "144 W"],
    options_en: ["12 W", "36 W", "48 W", "144 W"],
    correct: 1,
    explanation_pt: "Potencia: P = R * I^2 = 4 * 9 = 36 W.",
    explanation_en: "Power: P = R * I^2 = 4 * 9 = 36 W."
  },
  {
    id: 58,
    category: "eletricidade",
    difficulty: "medium",
    question_pt: "O campo magnetico gerado por um fio retilineo longo percorrido por corrente tem formato de:",
    question_en: "The magnetic field generated by a long straight wire carrying current has the shape of:",
    options_pt: [
      "Linhas retas paralelas ao fio",
      "Circulos concentricos ao redor do fio",
      "Espirais ao longo do fio",
      "Linhas radiais saindo do fio"
    ],
    options_en: [
      "Straight lines parallel to the wire",
      "Concentric circles around the wire",
      "Spirals along the wire",
      "Radial lines leaving the wire"
    ],
    correct: 1,
    explanation_pt: "O campo magnetico de um fio retilineo forma circulos concentricos ao redor do fio, cuja orientacao e dada pela regra da mao direita.",
    explanation_en: "The magnetic field of a straight wire forms concentric circles around the wire, whose orientation is given by the right-hand rule."
  },
  {
    id: 59,
    category: "eletricidade",
    difficulty: "hard",
    question_pt: "Em um circuito com uma bateria de 12 V e resistencia interna de 2 Ohms, ligada a um resistor externo de 4 Ohms, qual e a corrente no circuito?",
    question_en: "In a circuit with a 12 V battery with internal resistance of 2 Ohms connected to a 4 Ohm external resistor, what is the current?",
    options_pt: ["1 A", "2 A", "3 A", "6 A"],
    options_en: ["1 A", "2 A", "3 A", "6 A"],
    correct: 1,
    explanation_pt: "I = fem / (R_interna + R_externa) = 12 / (2 + 4) = 12 / 6 = 2 A.",
    explanation_en: "I = emf / (R_internal + R_external) = 12 / (2 + 4) = 12 / 6 = 2 A."
  },
  {
    id: 60,
    category: "eletricidade",
    difficulty: "hard",
    question_pt: "Tres resistores de 2, 3 e 6 Ohms estao em paralelo, conectados a uma fonte de 12 V. Qual e a corrente total fornecida pela fonte?",
    question_en: "Three resistors of 2, 3, and 6 Ohms are in parallel, connected to a 12 V source. What is the total current from the source?",
    options_pt: ["1 A", "6 A", "12 A", "22 A"],
    options_en: ["1 A", "6 A", "12 A", "22 A"],
    correct: 2,
    explanation_pt: "1/Req = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1. Logo Req = 1 Ohm. I = V/Req = 12/1 = 12 A.",
    explanation_en: "1/Req = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1. So Req = 1 Ohm. I = V/Req = 12/1 = 12 A."
  },

  // ============================================================
  // MODERNA (10 questions: 4 easy, 4 medium, 2 hard)
  // ============================================================
  {
    id: 61,
    category: "moderna",
    difficulty: "easy",
    question_pt: "Quem propôs a Teoria da Relatividade Restrita?",
    question_en: "Who proposed the Theory of Special Relativity?",
    options_pt: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Max Planck"],
    options_en: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Max Planck"],
    correct: 2,
    explanation_pt: "Albert Einstein publicou a Teoria da Relatividade Restrita em 1905, estabelecendo que a velocidade da luz e constante em todos os referenciais inerciais.",
    explanation_en: "Albert Einstein published the Theory of Special Relativity in 1905, establishing that the speed of light is constant in all inertial reference frames."
  },
  {
    id: 62,
    category: "moderna",
    difficulty: "easy",
    question_pt: "O efeito fotoeletrico demonstra que a luz tem comportamento de:",
    question_en: "The photoelectric effect demonstrates that light behaves as:",
    options_pt: ["Apenas onda", "Apenas particula", "Particula (foton)", "Materia solida"],
    options_en: ["Only a wave", "Only a particle", "A particle (photon)", "Solid matter"],
    correct: 2,
    explanation_pt: "O efeito fotoeletrico, explicado por Einstein, mostra que a luz pode se comportar como particulas chamadas fotons, cada um com energia E = hf.",
    explanation_en: "The photoelectric effect, explained by Einstein, shows that light can behave as particles called photons, each with energy E = hf."
  },
  {
    id: 63,
    category: "moderna",
    difficulty: "easy",
    question_pt: "A radioatividade foi descoberta por:",
    question_en: "Radioactivity was discovered by:",
    options_pt: ["Marie Curie", "Henri Becquerel", "Ernest Rutherford", "J.J. Thomson"],
    options_en: ["Marie Curie", "Henri Becquerel", "Ernest Rutherford", "J.J. Thomson"],
    correct: 1,
    explanation_pt: "Henri Becquerel descobriu a radioatividade em 1896 ao observar que sais de uranio emitiam radiacao espontaneamente.",
    explanation_en: "Henri Becquerel discovered radioactivity in 1896 by observing that uranium salts emitted radiation spontaneously."
  },
  {
    id: 64,
    category: "moderna",
    difficulty: "easy",
    question_pt: "No modelo atomico de Bohr, os eletrons:",
    question_en: "In Bohr's atomic model, electrons:",
    options_pt: [
      "Estao espalhados uniformemente no atomo",
      "Orbitam o nucleo em niveis de energia quantizados",
      "Estao parados no nucleo",
      "Podem ter qualquer energia"
    ],
    options_en: [
      "Are spread uniformly throughout the atom",
      "Orbit the nucleus in quantized energy levels",
      "Are stationary in the nucleus",
      "Can have any energy"
    ],
    correct: 1,
    explanation_pt: "No modelo de Bohr, os eletrons orbitam o nucleo em niveis de energia discretos (quantizados). Ao mudar de nivel, emitem ou absorvem fotons.",
    explanation_en: "In Bohr's model, electrons orbit the nucleus in discrete (quantized) energy levels. When changing levels, they emit or absorb photons."
  },
  {
    id: 65,
    category: "moderna",
    difficulty: "medium",
    question_pt: "A equacao E = mc^2 de Einstein indica que:",
    question_en: "Einstein's equation E = mc^2 indicates that:",
    options_pt: [
      "A energia e proporcional a velocidade",
      "Massa e energia sao equivalentes e interconversiveis",
      "A luz tem massa infinita",
      "A energia cinetica e constante"
    ],
    options_en: [
      "Energy is proportional to velocity",
      "Mass and energy are equivalent and interconvertible",
      "Light has infinite mass",
      "Kinetic energy is constant"
    ],
    correct: 1,
    explanation_pt: "A famosa equacao mostra a equivalencia entre massa e energia: uma pequena quantidade de massa pode ser convertida em uma grande quantidade de energia.",
    explanation_en: "The famous equation shows the equivalence between mass and energy: a small amount of mass can be converted into a large amount of energy."
  },
  {
    id: 66,
    category: "moderna",
    difficulty: "medium",
    question_pt: "A dualidade onda-particula afirma que:",
    question_en: "Wave-particle duality states that:",
    options_pt: [
      "Apenas a luz tem comportamento dual",
      "Toda materia e radiacao podem exibir comportamento de onda e particula",
      "Ondas e particulas sao a mesma coisa",
      "Particulas nao podem ter comprimento de onda"
    ],
    options_en: [
      "Only light has dual behavior",
      "All matter and radiation can exhibit both wave and particle behavior",
      "Waves and particles are the same thing",
      "Particles cannot have a wavelength"
    ],
    correct: 1,
    explanation_pt: "A dualidade onda-particula, proposta por De Broglie, afirma que toda materia tem propriedades ondulatórias, com comprimento de onda lambda = h/p.",
    explanation_en: "Wave-particle duality, proposed by De Broglie, states that all matter has wave properties, with wavelength lambda = h/p."
  },
  {
    id: 67,
    category: "moderna",
    difficulty: "medium",
    question_pt: "Em um decaimento radioativo beta-menos, um neutron se transforma em:",
    question_en: "In a beta-minus radioactive decay, a neutron transforms into:",
    options_pt: [
      "Um proton, um eletron e um antineutrino",
      "Dois protons e um eletron",
      "Uma particula alfa e um foton",
      "Dois neutrons e um positron"
    ],
    options_en: [
      "A proton, an electron and an antineutrino",
      "Two protons and an electron",
      "An alpha particle and a photon",
      "Two neutrons and a positron"
    ],
    correct: 0,
    explanation_pt: "No decaimento beta-menos, um neutron se converte em um proton, emitindo um eletron (particula beta) e um antineutrino do eletron.",
    explanation_en: "In beta-minus decay, a neutron converts into a proton, emitting an electron (beta particle) and an electron antineutrino."
  },
  {
    id: 68,
    category: "moderna",
    difficulty: "medium",
    question_pt: "A meia-vida de um elemento radioativo e o tempo necessario para:",
    question_en: "The half-life of a radioactive element is the time required for:",
    options_pt: [
      "Todo o material se desintegrar",
      "Metade dos atomos radioativos se desintegrarem",
      "A radiacao parar completamente",
      "A massa dobrar"
    ],
    options_en: [
      "All the material to disintegrate",
      "Half of the radioactive atoms to disintegrate",
      "The radiation to stop completely",
      "The mass to double"
    ],
    correct: 1,
    explanation_pt: "A meia-vida e o tempo em que metade dos nucleos radioativos de uma amostra se desintegram. Apos duas meias-vidas, resta 1/4 da amostra original.",
    explanation_en: "Half-life is the time in which half the radioactive nuclei in a sample disintegrate. After two half-lives, 1/4 of the original sample remains."
  },
  {
    id: 69,
    category: "moderna",
    difficulty: "hard",
    question_pt: "Um foton tem frequencia de 5 x 10^14 Hz. Qual e sua energia? (h = 6,6 x 10^-34 J.s)",
    question_en: "A photon has a frequency of 5 x 10^14 Hz. What is its energy? (h = 6.6 x 10^-34 J.s)",
    options_pt: ["3,3 x 10^-48 J", "3,3 x 10^-19 J", "7,6 x 10^-20 J", "1,3 x 10^-19 J"],
    options_en: ["3.3 x 10^-48 J", "3.3 x 10^-19 J", "7.6 x 10^-20 J", "1.3 x 10^-19 J"],
    correct: 1,
    explanation_pt: "E = h * f = 6,6 x 10^-34 * 5 x 10^14 = 33 x 10^-20 = 3,3 x 10^-19 J.",
    explanation_en: "E = h * f = 6.6 x 10^-34 * 5 x 10^14 = 33 x 10^-20 = 3.3 x 10^-19 J."
  },
  {
    id: 70,
    category: "moderna",
    difficulty: "hard",
    question_pt: "Uma amostra radioativa tem meia-vida de 8 dias. Apos 24 dias, qual fracao da amostra original ainda permanece?",
    question_en: "A radioactive sample has a half-life of 8 days. After 24 days, what fraction of the original sample remains?",
    options_pt: ["1/2", "1/4", "1/8", "1/16"],
    options_en: ["1/2", "1/4", "1/8", "1/16"],
    correct: 2,
    explanation_pt: "Numero de meias-vidas: 24/8 = 3. Fracao restante = (1/2)^3 = 1/8 da amostra original.",
    explanation_en: "Number of half-lives: 24/8 = 3. Remaining fraction = (1/2)^3 = 1/8 of the original sample."
  }
];

// Loaded via <script> tag — CATEGORY_INFO and QUESTIONS are global
