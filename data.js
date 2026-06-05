// Diccionario de traducciones extendido
const translations = {
    es: {
        langBtn: "EN",
        ingresar: "Ingresar",
        title1: "Renueva y ",
        title2: "limpia tu mente",
        title3: " cada día.",
        desc: "Una app web para luchar contra el pecado memorizando la Palabra cada día.",
        empezar: "Empezar",
        verseText: '"No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento..." <strong class="verse-ref">— Romanos 12:2</strong>',
        attributionText: 'Logo creado por: <a href="https://www.flaticon.es/iconos-gratis/espada" title="espada iconos" target="_blank">FR_Media - Flaticon</a>',
        // Textos del Login
        tabLogin: "Iniciar Sesión",
        tabRegister: "Crear Cuenta",
        lblEmail: "Correo Electrónico",
        lblPass: "Contraseña",
        lblName: "Nombre",
        btnSubmitLogin: "Ingresar",
        btnSubmitReg: "Registrarse",
        // Textos del Dashboard
        dashTitle: 'Áreas de <span class="emphasized">Batalla</span>',
        dashSubtitle: "Selecciona un área para memorizar y renovar tu entendimiento hoy.",
        titleSexual: "Pecado Sexual",
        descSexual: "Guardar el cuerpo y la mente en santidad, huyendo de las pasiones juveniles.",
        titleOrgullo: "Orgullo / Soberbia",
        descOrgullo: "Reconocer la dependencia absoluta de Dios y revestirse de profunda humildad.",
        titleGratitud: "Falta de Gratitud",
        descGratitud: "Combatir la queja permanente desarrollando un corazón agradecido en todo.",
        btnLuchar: "Luchar",
        logout: "Cerrar Sesión"
    },
    en: {
        langBtn: "ES",
        ingresar: "Login",
        title1: "Renew and ",
        title2: "cleanse your mind",
        title3: " every day.",
        desc: "A web app to fight sin by memorizing the Word every day.",
        empezar: "Get Started",
        verseText: '"Do not conform to the pattern of this world, but be transformed by the renewing of your mind..." <strong class="verse-ref">— Romans 12:2</strong>',
        attributionText: 'Logo created by: <a href="https://www.flaticon.es/iconos-gratis/espada" title="espada icons" target="_blank">FR_Media - Flaticon</a>',
        // Login Texts
        tabLogin: "Log In",
        tabRegister: "Sign Up",
        lblEmail: "Email",
        lblPass: "Password",
        lblName: "Name",
        btnSubmitLogin: "Log In",
        btnSubmitReg: "Register",
        // Dashboard Texts
        dashTitle: 'Areas of <span class="emphasized">Battle</span>',
        dashSubtitle: "Select an area to memorize and renew your understanding today.",
        titleSexual: "Sexual Sin",
        descSexual: "Guard the body and mind in holiness, fleeing from youthful passions.",
        titleOrgullo: "Pride / Arrogance",
        descOrgullo: "Recognize absolute dependence on God and clothe yourself with deep humility.",
        titleGratitud: "Lack of Gratitud",
        descGratitud: "Combat permanent complaining by developing a thankful heart in everything.",
        btnLuchar: "Fight",
        logout: "Logout"
    }
};

// 1. Lista de 30 versículos contra el Pecado Sexual
const sexualSinVerses = [
  {
    es: { ref: "1 Corintios 6:18", text: "Huid de la fornicación. Cualquier otro pecado que el hombre cometa, está fuera del cuerpo; mas el que fornica, contra su propio cuerpo peca." },
    en: { ref: "1 Corinthians 6:18", text: "Flee from sexual immorality. All other sins a person commits are outside the body, but whoever sins sexually, sins against their own body." }
  },
  {
    es: { ref: "1 Tesalonicenses 4:3", text: "Pues la voluntad de Dios es vuestra santificación; que os apartéis de fornicación." },
    en: { ref: "1 Thessalonians 4:3", text: "It is God’s will that you should be sanctified: that you should avoid sexual immorality." }
  },
  {
    es: { ref: "1 Tesalonicenses 4:4-5", text: "Que cada uno de vosotros sepa tener su propia esposa en santidad y honor; no en pasión de concupiscencia, como los gentiles que no conocen a Dios." },
    en: { ref: "1 Thessalonians 4:4-5", text: "That each of you should learn to control your own body in a way that is holy and honorable, not in passionate lust like the pagans, who do not know God." }
  },
  {
    es: { ref: "Mateo 5:28", text: "Pero yo os digo que cualquiera que mira a una mujer para codiciarla, ya adulteró con ella en su corazón." },
    en: { ref: "Matthew 5:28", text: "But I tell you that anyone who looks at a woman lustfully has already committed adultery with her in his heart." }
  },
  {
    es: { ref: "Salmo 119:9", text: "¿Con qué limpiará el joven su camino? Con guardar tu palabra." },
    en: { ref: "Psalm 119:9", text: "How can a young person stay on the path of purity? By living according to your word." }
  },
  {
    es: { ref: "Gálatas 5:16", text: "Digo, pues: Andad en el Espíritu, y no satisfagáis los deseos de la carne." },
    en: { ref: "Galatians 5:16", text: "So I say, walk by the Spirit, and you will not gratify the desires of the flesh." }
  },
  {
    es: { ref: "Colosenses 3:5", text: "Haced morir, pues, lo terrenal en vosotros: fornicación, impureza, pasiones desordenadas, malos deseos y avaricia, que es idolatría." },
    en: { ref: "Colossians 3:5", text: "Put to death, therefore, whatever belongs to your earthly nature: sexual immorality, impurity, lust, evil desires and greed, which is idolatry." }
  },
  {
    es: { ref: "Efesios 5:3", text: "Pero fornicación y toda impureza, o avaricia, ni aun se nombre entre vosotros, como conviene a santos." },
    en: { ref: "Ephesians 5:3", text: "But among you there must not be even a hint of sexual immorality, or of any kind of impurity, or of greed, because these are improper for God’s holy people." }
  },
  {
    es: { ref: "Job 31:1", text: "Hice pacto con mis ojos; ¿Cómo, pues, había yo de mirar a una virgen?" },
    en: { ref: "Job 31:1", text: "I made a covenant with my eyes not to look lustfully at a young woman." }
  },
  {
    es: { ref: "Proverbios 6:25", text: "No codicies su hermosura en tu corazón, ni ella te prenda con sus ojos." },
    en: { ref: "Proverbs 6:25", text: "Do not lust in your heart after her beauty or let her captivate you with her eyes." }
  },
  {
    es: { ref: "2 Timoteo 2:22", text: "Huye también de las pasiones juveniles, y sigue la justicia, la fe, el amor y la paz, con los que de corazón limpio invocan al Señor." },
    en: { ref: "2 Timothy 2:22", text: "Flee the evil desires of youth and pursue righteousness, faith, love and peace, along with those who call on the Lord out of a pure heart." }
  },
  {
    es: { ref: "1 Pedro 2:11", text: "Amados, yo os ruego como a extranjeros y peregrinos, que os abstengáis de los deseos carnales que batallan contra el alma." },
    en: { ref: "1 Peter 2:11", text: "Dear friends, I urge you, as foreigners and exiles, to abstain from sinful desires, which wage war against your soul." }
  },
  {
    es: { ref: "Romanos 13:14", text: "Sino vestíos del Señor Jesucristo, y no proveáis para los deseos de la carne." },
    en: { ref: "Romans 13:14", text: "Rather, clothe yourselves with the Lord Jesus Christ, and do not think about how to gratify the desires of the flesh." }
  },
  {
    es: { ref: "Romanos 8:13", text: "Porque si vivís conforme a la carne, moriréis; mas si por el Espíritu hacéis morir las obras de la carne, viviréis." },
    en: { ref: "Romans 8:13", text: "For if you live according to the flesh, you will die; but if by the Spirit you put to death the misdeeds of the body, you will live." }
  },
  {
    es: { ref: "Romanos 6:12", text: "No reine, pues, el pecado en vuestro cuerpo mortal, de modo que lo obedezcáis en sus concupiscencias." },
    en: { ref: "Romans 6:12", text: "Therefore do not let sin reign in your mortal body so that you obey its evil desires." }
  },
  {
    es: { ref: "Proverbios 5:8", text: "Aleja de ella tu camino, y no te acerques a la puerta de su casa." },
    en: { ref: "Proverbs 5:8", text: "Keep to a path far from her, do not go near the door of her house." }
  },
  {
    es: { ref: "1 Corintios 10:13", text: "No os ha sobrevenido ninguna tentación que no sea humana; pero fiel es Dios, que no os dejará ser tentados más de lo que podéis resistir, sino que dará también juntamente con la tentación la salida, para que podáis soportar." },
    en: { ref: "1 Corinthians 10:13", text: "No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it." }
  },
  {
    es: { ref: "Hebreos 13:4", text: "Honroso sea en todos el matrimonio, y el lecho sin mancilla; pero a los fornicarios y a los adúlteros los juzgará Dios." },
    en: { ref: "Hebrews 13:4", text: "Marriage should be honored by all, and the marriage bed kept pure, for God will judge the adulterer and all the sexually immoral." }
  },
  {
    es: { ref: "Mateo 15:19", text: "Porque del corazón salen los malos pensamientos, los homicidios, los adulterios, las fornicaciones, los hurtos, los falsos testimonios, las blasfemias." },
    en: { ref: "Matthew 15:19", text: "For out of the heart come evil thoughts, murder, adultery, sexual immorality, theft, false testimony, slander." }
  },
  {
    es: { ref: "Santiago 1:14-15", text: "Sino que cada uno es tentado, cuando de su propia concupiscencia es atraído y seducido. Entonces la concupiscencia, después que ha concebido, da a luz el pecado; y el pecado, siendo consumado, da a luz la muerte." },
    en: { ref: "James 1:14-15", text: "But each person is tempted when they are dragged away by their own evil desire and enticed. Then, after desire has conceived, it gives birth to sin; and sin, when it is full-grown, gives birth to death." }
  },
  {
    es: { ref: "Filipenses 4:8", text: "Por lo demás, hermanos, todo lo que es verdadero, todo lo honesto, todo lo justo, todo lo puro, todo lo amable, todo lo que es de buen nombre; si hay virtud alguna, si algo digno de alabanza, en esto pensad." },
    en: { ref: "Philippians 4:8", text: "Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—if anything is excellent or praiseworthy—think about such things." }
  },
  {
    es: { ref: "Salmo 51:10", text: "Crea en mí, oh Dios, un corazón limpio, y renueva un espíritu recto dentro de mí." },
    en: { ref: "Psalm 51:10", text: "Create in me a pure heart, O God, and renew a steadfast spirit within me." }
  },
  {
    es: { ref: "1 Juan 2:16", text: "Porque todo lo que hay en el mundo, los deseos de la carne, los deseos de los ojos, y la vanagloria de la vida, no proviene del Padre, sino del mundo." },
    en: { ref: "1 John 2:16", text: "For everything in the world—the lust of the flesh, the lust of the eyes, and the pride of life—comes not from the Father but from the world." }
  },
  {
    es: { ref: "Romanos 12:2", text: "No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento, para que comprobéis cuál sea la buena voluntad de Dios, agradable y perfecta." },
    en: { ref: "Romans 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God’s will is—his good, pleasing and perfect will." }
  },
  {
    es: { ref: "1 Corintios 6:19", text: "¿O ignoráis que vuestro cuerpo es templo del Espíritu Santo, el cual está en vosotros, el cual tenéis de Dios, y que no sois vuestros?" },
    en: { ref: "1 Corinthians 6:19", text: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own." }
  },
  {
    es: { ref: "1 Corintios 6:20", text: "Porque habéis sido comprados por precio; glorificad, pues, a Dios en vuestro cuerpo y en vuestro espíritu, los cuales son de Dios." },
    en: { ref: "1 Corinthians 6:20", text: "You were bought at a price. Therefore honor God with your bodies." }
  },
  {
    es: { ref: "Proverbios 4:23", text: "Sobre toda cosa guardada, guarda tu corazón; porque de él mana la vida." },
    en: { ref: "Proverbs 4:23", text: "Above all else, guard your heart, for everything you do flows from it." }
  },
  {
    es: { ref: "Efesios 4:22-24", text: "En cuanto a la pasada manera de vivir, despojaos del viejo hombre, que está viciado conforme a los deseos engañosos, y renovaos en el espíritu de vuestra mente, y vestíos del nuevo hombre, creado según Dios en la justicia y santidad de la verdad." },
    en: { ref: "Ephesians 4:22-24", text: "You were taught, with regard to your former way of life, to put off your old self, which is being corrupted by its deceitful desires; to be made new in the attitude of your minds; and to put on the new self, created to be like God in true righteousness and holiness." }
  },
  {
    es: { ref: "Tito 2:11-12", text: "Porque la gracia de Dios se ha manifestado para salvación a todos los hombres, enseñándonos que, renunciando a la impiedad y a los deseos mundanos, vivamos en este siglo sobria, justa y piadosamente." },
    en: { ref: "Titus 2:11-12", text: "For the grace of God has appeared that offers salvation to all people. It teaches us to say 'No' to ungodliness and worldly passions, and to live self-controlled, upright and godly lives in this present age." }
  },
  {
    es: { ref: "Gálatas 5:24", text: "Pero los que son de Cristo han crucificado la carne con sus pasiones y deseos." },
    en: { ref: "Galatians 5:24", text: "Those who belong to Christ Jesus have crucified the flesh with its passions and desires." }
  }
];

// 2. Lista de 30 versículos contra el Orgullo / Soberbia
const orgulloVerses = [
  {
    es: { ref: "Proverbios 16:18", text: "Antes del quebrantamiento es la soberbia, y antes de la caída la altivez de espíritu." },
    en: { ref: "Proverbs 16:18", text: "Pride goes before destruction, a haughty spirit before a fall." }
  },
  {
    es: { ref: "Proverbios 11:2", text: "Cuando viene la soberbia, viene también la deshonra; mas con los humildes está la sabiduría." },
    en: { ref: "Proverbs 11:2", text: "When pride comes, then comes disgrace, but with humility comes wisdom." }
  },
  {
    es: { ref: "Santiago 4:6", text: "Pero él da mayor gracia. Por esto dice: Dios resiste a los soberbios, y da gracia a los humildes." },
    en: { ref: "James 4:6", text: "But he gives us more grace. That is why Scripture says: 'God opposes the proud but shows favor to the humble.'" }
  },
  {
    es: { ref: "Proverbios 8:13", text: "El temor de Jehová es aborrecer el mal; la soberbia y la arrogancia, el mal camino, y la boca perversa, aborrezco." },
    en: { ref: "Proverbs 8:13", text: "To fear the Lord is to hate evil; I hate pride and arrogance, evil behavior and perverse speech." }
  },
  {
    es: { ref: "1 Pedro 5:5", text: "Igualmente, jóvenes, estad sujetos a los ancianos; y todos, sumisos unos a otros, revestíos de humildad; porque: Dios resiste a los soberbios, y da gracia a los humildes." },
    en: { ref: "1 Peter 5:5", text: "In the same way, you who are younger, submit yourselves to your elders. All of you, clothe yourselves with humility toward one another, because, 'God opposes the proud but shows favor to the humble.'" }
  },
  {
    es: { ref: "Proverbios 29:23", text: "La soberbia del hombre le abate; pero al humilde de espíritu sustenta la honra." },
    en: { ref: "Proverbs 29:23", text: "Pride brings a person low, but the lowly in spirit gain honor." }
  },
  {
    es: { ref: "Proverbios 16:5", text: "Abominación es a Jehová todo altivo de corazón; ciertamente no quedará impune." },
    en: { ref: "Proverbs 16:5", text: "The Lord detests all the proud of heart. Be sure of this: They will not go unpunished." }
  },
  {
    es: { ref: "Salmo 138:6", text: "Porque Jehová es excelso, y atiende al humilde, mas al altivo mira de lejos." },
    en: { ref: "Psalm 138:6", text: "Though the Lord is exalted, he looks kindly on the lowly; though lofty, he sees them from afar." }
  },
  {
    es: { ref: "Filipenses 2:3", text: "Nada hagáis por contienda o por vanagloria; antes bien con humildad, estimando cada uno a los demás como superiores a él mismo." },
    en: { ref: "Philippians 2:3", text: "Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves." }
  },
  {
    es: { ref: "Romanos 12:16", text: "Unánimes entre vosotros; no altivos, sino asociaos con los humildes. No seáis sabios en vuestra propia opinión." },
    en: { ref: "Romans 12:16", text: "Live in harmony with one another. Do not be proud, but be willing to associate with people of low position. Do not be conceited." }
  },
  {
    es: { ref: "Romanos 12:3", text: "Digo, pues, por la gracia que me es dada, a cada cual que está entre vosotros, que no tenga más alto concepto de sí que el que debe tener, sino que piense de sí con cordura, conforme a la medida de fe que Dios repartió a cada uno." },
    en: { ref: "Romans 12:3", text: "For by the grace given me I say to every one of you: Do not think of yourself more highly than you ought, but rather think of yourself with sober judgment, in accordance with the faith God has distributed to each of you." }
  },
  {
    es: { ref: "Proverbios 21:4", text: "Altivez de ojos, y orgullo de corazón, y pensamiento de impíos, son pecado." },
    en: { ref: "Proverbs 21:4", text: "Haughty eyes and a proud heart—the unplowed field of the wicked—produce sin." }
  },
  {
    es: { ref: "Lucas 14:11", text: "Porque cualquiera que se enaltece, será humillado; y el que se humilla, será enaltecido." },
    en: { ref: "Luke 14:11", text: "For all those who exalt themselves will be humbled, and those who humble themselves will be exalted." }
  },
  {
    es: { ref: "1 Corintios 13:4", text: "El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece." },
    en: { ref: "1 Corinthians 13:4", text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud." }
  },
  {
    es: { ref: "Jeremías 9:23", text: "Así dijo Jehová: No se alabe el sabio en su sabiduría, ni en su valentía se alabe el valiente, ni el rico se alabe en sus riquezas." },
    en: { ref: "Jeremiah 9:23", text: "This is what the Lord says: 'Let not the wise boast of their wisdom or the strong boast of their strength or the rich boast of their riches.'" }
  },
  {
    es: { ref: "Proverbios 27:2", text: "Alábete el extraño, y no tu propia boca; el ajeno, y no los labios tuyos." },
    en: { ref: "Proverbs 27:2", text: "Let someone else praise you, and not your own mouth; an outsider, and not your own lips." }
  },
  {
    es: { ref: "Gálatas 6:3", text: "Porque el que se cree ser algo, no siendo nada, a sí mismo se engaña." },
    en: { ref: "Galatians 6:3", text: "If anyone thinks they are something when they are not, they deceive themselves." }
  },
  {
    es: { ref: "Isaías 2:11", text: "La altivez de los ojos del hombre será abatida, y la soberbia de los hombres será humillada; y Jehová solo será exaltado en aquel día." },
    en: { ref: "Isaiah 2:11", text: "The eyes of the arrogant will be humbled and human pride brought low; the Lord alone will be exalted in that day." }
  },
  {
    es: { ref: "Proverbios 18:12", text: "Antes del quebrantamiento se eleva el corazón del hombre, y antes de la honra es el abatimiento." },
    en: { ref: "Proverbs 18:12", text: "Before a downfall the heart is haughty, but humility comes before honor." }
  },
  {
    es: { ref: "1 Samuel 2:3", text: "No multipliquéis palabras de grandeza y altanería; cesen las palabras arrogantes de vuestra boca, porque el Dios de todo saber es Jehová, y a él toca el pesar las acciones." },
    en: { ref: "1 Samuel 2:3", text: "Do not keep talking so proudly or let your mouth speak such arrogance, for the Lord is a God who knows, and by him deeds are weighed." }
  },
  {
    es: { ref: "Salmo 10:4", text: "El malo, por la altivez de su rostro, no busca a Dios; no hay Dios en ninguno de sus pensamientos." },
    en: { ref: "Psalm 10:4", text: "In his pride the wicked man does not seek him; in all his thoughts there is no room for God." }
  },
  {
    es: { ref: "Proverbios 13:10", text: "Ciertamente la soberbia concebirá contienda; mas con los avisados está la sabiduría." },
    en: { ref: "Proverbs 13:10", text: "Where there is strife, there is pride, but wisdom is found in those who take advice." }
  },
  {
    es: { ref: "Isaías 13:11", text: "Y castigaré al mundo por su maldad, y a los impíos por su iniquidad; y haré que cese la arrogancia de los soberbios, y abatiré la altivez de los fuertes." },
    en: { ref: "Isaiah 13:11", text: "I will punish the world for its evil, the wicked for their sins. I will put an end to the arrogance of the haughty and will humble the pride of the ruthless." }
  },
  {
    es: { ref: "2 Crónicas 26:16", text: "Mas cuando ya era fuerte, su corazón se enalteció para su ruina; porque se rebeló contra Jehová su Dios, entrando en el templo de Jehová para quemar incienso en el altar del incienso." },
    en: { ref: "2 Chronicles 26:16", text: "But after Uzziah became powerful, his pride led to his downfall. He was unfaithful to the Lord his God, and entered the temple of the Lord to burn incense on the altar of incense." }
  },
  {
    es: { ref: "Abdías 1:3", text: "La soberbia de tu corazón te ha engañado, tú que moras en las hendiduras de las peñas, en tu altísima morada; que dices en tu corazón: ¿Quién me derribará a tierra?" },
    en: { ref: "Obadiah 1:3", text: "The pride of your heart has deceived you, you who live in the clefts of the rocks and make your home on the heights, you who say to yourself, 'Who can bring me down to the ground?'" }
  },
  {
    es: { ref: "Salmo 119:21", text: "Reprendiste a los soberbios, los malditos, que se desvían de tus mandamientos." },
    en: { ref: "Psalm 119:21", text: "You rebuke the arrogant, who are accursed, those who stray from your commands." }
  },
  {
    es: { ref: "Proverbios 15:25", text: "Jehová asolará la casa de los soberbios; pero afirmará la heredad de la viuda." },
    en: { ref: "Proverbs 15:25", text: "The Lord tears down the house of the proud, but he sets the widow’s boundary stones in place." }
  },
  {
    es: { ref: "1 Corintios 10:12", text: "Así que, el que piensa estar firme, mire que no caiga." },
    en: { ref: "1 Corinthians 10:12", text: "So, if you think you are standing firm, be careful that you don’t fall!" }
  },
  {
    es: { ref: "Proverbios 22:4", text: "Riquezas, honra y vida son la remuneración de la humildad y del temor de Jehová." },
    en: { ref: "Proverbs 22:4", text: "Humility is the fear of the Lord; its wages are riches and honor and life." }
  },
  {
    es: { ref: "Sofonías 2:3", text: "Buscad a Jehová todos los humildes de la tierra, los que pusisteis por obra su juicio; buscad justicia, buscad mansedumbre; quizás seréis guardados en el día del enojo de Jehová." },
    en: { ref: "Zephaniah 2:3", text: "Seek the Lord, all you humble of the land, you who do what he commands. Seek righteousness, seek humility; perhaps you will be sheltered on the day of the Lord’s anger." }
  }
];

// 3. Lista de 30 versículos contra la Falta de Gratitud
const gratitudVerses = [
  {
    es: { ref: "1 Tesalonicenses 5:18", text: "Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús." },
    en: { ref: "1 Thessalonians 5:18", text: "Give thanks in all circumstances; for this is God’s will for you in Christ Jesus." }
  },
  {
    es: { ref: "Romanos 1:21", text: "Pues habiendo conocido a Dios, no le glorificaron como a Dios, ni le dieron gracias, sino que se envanecieron en sus razonamientos, y su necio corazón fue entenebrecido." },
    en: { ref: "Romans 1:21", text: "For although they knew God, they neither glorified him as God nor gave thanks to him, but their thinking became futile and their foolish hearts were darkened." }
  },
  {
    es: { ref: "2 Timoteo 3:1-2", text: "También debes saber esto: que en los postreros días vendrán tiempos peligrosos. Porque habrá hombres amadores de sí mismos, avaros, vanagloriosos, soberbios, blasfemos, desobedientes a los padres, ingratos, impíos." },
    en: { ref: "2 Timothy 3:1-2", text: "But mark this: There will be terrible times in the last days. People will be lovers of themselves, lovers of money, boastful, proud, abusive, disobedient to their parents, ungrateful, unholy." }
  },
  {
    es: { ref: "Colosenses 3:15", text: "Y la paz de Dios gobierne en vuestros corazones, a la que asimismo fuisteis llamados en un solo cuerpo; y sed agradecidos." },
    en: { ref: "Colossians 3:15", text: "Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful." }
  },
  {
    es: { ref: "Colosenses 3:17", text: "Y todo lo que hacéis, sea de palabra o de hecho, hacedlo todo en el nombre del Señor Jesús, dando gracias a Dios Padre por medio de él." },
    en: { ref: "Colossians 3:17", text: "And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him." }
  },
  {
    es: { ref: "Efesios 5:20", text: "Dando siempre gracias por todo al Dios y Padre, en el nombre de nuestro Señor Jesucristo." },
    en: { ref: "Ephesians 5:20", text: "Always giving thanks to God the Father for everything, in the name of our Lord Jesus Christ." }
  },
  {
    es: { ref: "Filipenses 4:6", text: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias." },
    en: { ref: "Philippians 4:6", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." }
  },
  {
    es: { ref: "Salmo 100:4", text: "Entrad por sus puertas con acción de gracias, por sus atrios con alabanza; alabadle, bendecid su nombre." },
    en: { ref: "Psalm 100:4", text: "Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name." }
  },
  {
    es: { ref: "Salmo 103:2", text: "Bendice, alma mía, a Jehová, y no olvides ninguno de sus beneficios." },
    en: { ref: "Psalm 103:2", text: "Praise the Lord, my soul, and forget not all his benefits." }
  },
  {
    es: { ref: "Hebreos 12:28", text: "Así que, recibiendo nosotros un reino inconmovible, tengamos gratitud, y mediante ella sirvamos a Dios agradándole con temor y reverencia." },
    en: { ref: "Hebrews 12:28", text: "Therefore, since we are receiving a kingdom that cannot be shaken, let us be thankful, and so worship God acceptably with reverence and awe." }
  },
  {
    es: { ref: "Lucas 17:17-18", text: "Respondiendo Jesús, dijo: ¿No son diez los que fueron limpiados? Y los nueve, ¿dónde están? ¿No hubo quien volviese y diese gloria a Dios sino este extranjero?" },
    en: { ref: "Luke 17:17-18", text: "Jesus asked, 'Were not all ten cleansed? Where are the other nine? Has no one returned to give praise to God except this foreigner?'" }
  },
  {
    es: { ref: "Colosenses 4:2", text: "Perseverad en la oración, velando en ella con acción de gracias." },
    en: { ref: "Colossians 4:2", text: "Devote yourselves to prayer, being watchful and thankful." }
  },
  {
    es: { ref: "Santiago 1:17", text: "Toda buena dádiva y todo don perfecto desciende de lo alto, del Padre de las luces, en el cual no hay mudanza, ni sombra de variación." },
    en: { ref: "James 1:17", text: "Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows." }
  },
  {
    es: { ref: "Salmo 50:14", text: "Sacrifica a Dios alabanza, y paga tus votos al Altísimo." },
    en: { ref: "Psalm 50:14", text: "Sacrifice thank offerings to God, fulfill your vows to the Most High." }
  },
  {
    es: { ref: "Salmo 50:23", text: "El que sacrifica alabanza me honrará; y al que ordenare su camino, le mostraré la salvación de Dios." },
    en: { ref: "Psalm 50:23", text: "Those who sacrifice thank offerings honor me, and to the blameless I will show my salvation." }
  },
  {
    es: { ref: "1 Crónicas 16:8", text: "Alabad a Jehová, invocad su nombre, dad a conocer en los pueblos sus obras." },
    en: { ref: "1 Chronicles 16:8", text: "Give praise to the Lord, proclaim his name; make known among the nations what he has done." }
  },
  {
    es: { ref: "Salmo 9:1", text: "Te alabaré, oh Jehová, con todo mi corazón; contaré todas tus maravillas." },
    en: { ref: "Psalm 9:1", text: "I will give thanks to you, Lord, with all my heart; I will tell of all your wonderful deeds." }
  },
  {
    es: { ref: "Jonás 2:9", text: "Mas yo con voz de alabanza te ofreceré sacrificios; pagaré lo que prometí. La salvación es de Jehová." },
    en: { ref: "Jonah 2:9", text: "But I, with shouts of grateful praise, will sacrifice to you. What I have vowed I will make good. I will say, 'Salvation comes from the Lord.'" }
  },
  {
    es: { ref: "Salmo 116:12", text: "¿Qué pagaré a Jehová por todos sus beneficios para conmigo?" },
    en: { ref: "Psalm 116:12", text: "What shall I return to the Lord for all his goodness to me?" }
  },
  {
    es: { ref: "2 Corintios 9:15", text: "¡Gracias a Dios por su don inefable!" },
    en: { ref: "2 Corinthians 9:15", text: "Thanks be to God for his indescribable gift!" }
  },
  {
    es: { ref: "Salmo 69:30", text: "Alabaré yo el nombre de Dios con cántico, lo exaltaré con alabanza." },
    en: { ref: "Psalm 69:30", text: "I will praise God’s name in song and glorify him with thanksgiving." }
  },
  {
    es: { ref: "Daniel 2:23", text: "A ti, oh Dios de mis padres, te doy gracias y te alabo, porque me has dado sabiduría y fuerza, y ahora me has revelado lo que te pedimos; pues nos has dado a conocer el asunto del rey." },
    en: { ref: "Daniel 2:23", text: "I thank and praise you, God of my ancestors: You have given me wisdom and power, you have made known to me what we asked of you, you have made known to us the dream of the king." }
  },
  {
    es: { ref: "1 Timoteo 4:4", text: "Porque todo lo que Dios creó es bueno, y nada es de desecharse, si se toma con acción de gracias." },
    en: { ref: "1 Timothy 4:4", text: "For everything God created is good, and nothing is to be rejected if it is received with thanksgiving." }
  },
  {
    es: { ref: "Salmo 107:8", text: "Alaben la misericordia de Jehová, y sus maravillas para con los hijos de los hombres." },
    en: { ref: "Psalm 107:8", text: "Let them give thanks to the Lord for his unfailing love and his wonderful deeds for mankind." }
  },
  {
    es: { ref: "Romanos 14:6", text: "El que hace caso del día, lo hace para el Señor; y el que no hace caso del día, para el Señor no lo hace. El que come, para el Señor come, porque da gracias a Dios; y el que no come, para el Señor no come, y da gracias a Dios." },
    en: { ref: "Romans 14:6", text: "Whoever regards one day as special does so to the Lord. Whoever eats meat does so to the Lord, for they give thanks to God; and whoever abstains does so to the Lord and gives thanks to God." }
  },
  {
    es: { ref: "Apocalipsis 7:12", text: "Diciendo: Amén. La bendición y la gloria y la sabiduría y la acción de gracias y la honra y el poder y la fortaleza, sean a nuestro Dios por los siglos de los siglos. Amén." },
    en: { ref: "Revelation 7:12", text: "Saying: 'Amen! Praise and glory and wisdom and thanks and honor and power and strength be to our God for ever and ever. Amen!'" }
  },
  {
    es: { ref: "Filipenses 4:11", text: "No lo digo porque tenga escasez, pues he aprendido a contentarme, cualquiera que sea mi situación." },
    en: { ref: "Philippians 4:11", text: "I am not saying this because I am in need, for I have learned to be content whatever the circumstances." }
  },
  {
    es: { ref: "Efesios 1:15-16", text: "Por esta causa también yo, habiendo oído de vuestra fe en el Señor Jesús, y de vuestro amor para con todos los santos, no ceso de dar gracias por vosotros, haciendo memoria de vosotros en mis oraciones." },
    en: { ref: "Ephesians 1:15-16", text: "For this reason, ever since I heard about your faith in the Lord Jesus and your love for all God’s people, I have not stopped giving thanks for you, remembering you in my prayers." }
  },
  {
    es: { ref: "2 Tesalonicenses 1:3", text: "Debemos siempre dar gracias a Dios por vosotros, hermanos, como es digno, por cuanto vuestra fe va creciendo, y el amor de todos y cada uno de vosotros abunda para con los demás." },
    en: { ref: "2 Thessalonians 1:3", text: "We ought always to thank God for you, brothers and sisters, and rightly so, because your faith is growing more and more, and the love all of you have for one another is increasing." }
  },
  {
    es: { ref: "1 Corintios 15:57", text: "Mas gracias sean dadas a Dios, que nos da la victoria por medio de nuestro Señor Jesucristo." },
    en: { ref: "1 Corinthians 15:57", text: "But thanks be to God! He gives us the victory through our Lord Jesus Christ." }
  }
];