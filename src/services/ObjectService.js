import TouristObject from "../entity/TouristObject";

const getObjects = () =>{
  return [
    new TouristObject(1,
      "Учан-су",
      "Крым, Бахчисарайское ш., Ялта",
      "Водопад Учан-су находится на высоте 390 метров над уровнем моря",
      "/images/uchan-su.jpg",
      44.49307329789721, 34.09320084315418
    ),
    new TouristObject(2,
      "Мангуп-Кале",
      "Плато горы-останца Баба-Даг",
      "Большая пещерная крепость на вершине горы Мангуп на Крымском полуострове. С нее открывается вид на три долины.",
      "/images/mangub-kale.webp",
      44.59460852943205,33.80779294146758
    ),
    new TouristObject(3,
      "Храм Солнца",
      "Ласпи",
      "Удобная тропа, ведущая к \"Храму Солнца\" – группе скалистых пиков на вершине горы.",
      "/images/hram-sun.jpg",
      44.40741470582413,33.74288400841356
    ),
    new TouristObject(4,
      "Ласточкино гнездо",
      "Гаспра",
      "Классический замок в сказочном стиле с обзорной площадкой, построенный в 1912 году на отвесной скале.",
      "https://lh5.googleusercontent.com/p/AF1QipMmpDnOmUJp336hGqyYHwUaT7EGrK5NhoVKL64e=w408-h272-k-no",
      44.43067165165089,34.12834434454977
    ),
    new TouristObject(5,
      "Херсонес Таврический",
      "Древняя ул., 1, Севастополь",
      "Руины древнегреческого города, построенного в V веке до н. э. в дорийском стиле. Включены в список ЮНЕСКО.",
      "https://lh5.googleusercontent.com/p/AF1QipNpC8ZFK86SY6GSK9pC3bSrL2bymeLJDJSsmMdZ=w426-h240-k-no",
      44.612593710254224, 33.49027601263246
    ),
    new TouristObject(6,
      "гора Ай Петри",
      "рядом с Кореизом",
      "Крымская гора: канатная дорога к вершине, различные кафе и виды на море.",
      "https://lh5.googleusercontent.com/p/AF1QipNftZ7FO5MvjDsl8psk4XAG1O0gP87D9j-2ocSH=w408-h272-k-no",
      44.450820535503446, 34.05652385659096
    ),
    new TouristObject(7,
      "Мыс Фиолент",
      "Севастополь",
      "Пляж для купания и яхтинга на мысе, упомянутом еще в древних мифах, с лазурной водой и эффектными скалами.",
      "https://lh5.googleusercontent.com/p/AF1QipNifQisymvXBBHUftmUWKJ0_EgE6hOoJ3Wfez47=w408-h565-k-no",
      44.50003828816215, 33.490658014572915
    ),
    new TouristObject(8,
      "Ливадийский дворец",
      "ул. Батурина, 44-а, Ливадия, 98655",
      "Просторный дворец в стиле итальянского ренессанса, построенный в 1911 г. для российской императорской семьи.",
      "https://lh5.googleusercontent.com/p/AF1QipNt-Ghowdoj4oVLYnPtrl68XTiNOEtWP-LC2K7c=w408-h306-k-no",
      44.470459481740185, 34.14383638568509
    ),
    new TouristObject(9,
      "Массандровский дворец",
      "Сімферопольське ш., 13, Массандра",
      "Музей в стилизованном под замок дворце XIX века, который был построен для царя Александра III, и живописный парк.",
      "https://lh5.googleusercontent.com/p/AF1QipM0Edx4VXay9mv81NpoHqDlbI1yefMBIHPGj-5E=w408-h421-k-no",
      44.5186004852221, 34.202828487174585
    ),
    new TouristObject(10,
      "гора Аю-Даг",
      "Южный берег Крыма",
      "гора на Южном берегу Крыма, расположенная на границе Большой Алушты и Большой Ялты. Она похожа на огромного медведя, склонённого к морю.",
      "https://lh5.googleusercontent.com/p/AF1QipNUV2Zb2yrKuY9OdbvKFOCOtXbuMR89G10BgTzi=w408-h305-k-no",
      44.55948678202889, 34.331476043545685
    ),
    new TouristObject(11,
      "Воронцовский дворец",
      "Дворцовое ш., 18, Алупка",
      "Особняк XIX века в готическом стиле с хорошо сохранившимися залами и живописным парком площадью 40 га.",
      "https://lh5.googleusercontent.com/p/AF1QipPDe_r5CjBH2HSs1ZV0mMG6EKyk4k1uBqehjNhs=w408-h272-k-no",
      44.41980169003601, 34.05437063199823
    ),
    new TouristObject(12,
      "Судакская крепость",
      "Судак",
      "Живописная средневековая крепость площадью более 30 га, расположенная на горе с видом на море.",
      "https://lh5.googleusercontent.com/p/AF1QipNwmQB3x5Ho8PzANu5ICyWiTZX6QvLXYoKNv_Tg=w408-h272-k-no",
      44.84199941776108, 34.957993841477375
    ),
    new TouristObject(13,
      "Грот Голицына",
      "Нов. Свет",
      "Живописный естественный грот, выточенный морскими волнами в горе Коба-Кая.",
      "https://lh5.googleusercontent.com/p/AF1QipPW4gYBcmmjpDf7f0InnIReoX3vsmQJ4yUyWx7o=w408-h306-k-no",
      44.82291284426661, 34.91835272349513
    ),
    new TouristObject(14,
      "Бронебашенная береговая батарея №35",
      "Севастополь",
      "Батарея на берегу моря с орудиями, музеем и мемориалом, созданная в начале XX века и использовавшаяся во время Второй мировой войны.",
      "https://lh5.googleusercontent.com/p/AF1QipNk1GhTdVUBZmjCOSRwXkHjaIooYyKgbc1eeWB9=w408-h306-k-no",
      44.5588526082913, 33.40665772612347
    ),
    new TouristObject(15,
      "Чуфут-Кале",
      "Бахчисарай",
      "Руины пещерного города VI века на возвышенности, являющиеся археологическим памятником.",
      "https://lh5.googleusercontent.com/p/AF1QipM2jOnJMCoDvjvWzhVk0KUFDliKe8WrKZwrrQ3R=w408-h272-k-no",
      44.745235706200596, 33.922764484798726
    ),
    new TouristObject(16,
      "Никитский ботанический сад",
      "Никита",
      "Основанный в 1812 году ботанический сад: научно-исследовательский центр с выдающейся коллекцией растений.",
      "https://lh5.googleusercontent.com/p/AF1QipMYo-Cz-YUqetDOXaESJjG0ChF01RiLvz12FU8y=w408-h306-k-no",
      44.51193341107211, 34.2325486511355
    ),
  ]
}

export default class ObjectService {
  static #objects = getObjects()
  static getTouristObjects(limit = 4, page = 1) {
    const objects = this.#objects;
    if (limit===-1){
      return {
        objects: objects,
        totalCount: objects.length
      }
    }
    const start = limit*(page-1),
    end = start+limit;
    return {
      objects: objects.slice(start,end),
      totalCount: objects.length
    }
  }
  
  static createTouristObject(object){
    const { name, location, description, img, lat, lon } = object;
    const newObject = new TouristObject(this.#objects.length+1, name, location, description, img, lat, lon)
    this.#objects.push(newObject)
  }
  static deleteTouristObject(object){
    this.#objects = this.#objects.filter((obj)=>obj.id!==object.id)
  }
  
}
