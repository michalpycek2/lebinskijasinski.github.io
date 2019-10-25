
/*
Tipue Search 5.0
Copyright (c) 2015 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/


// List of pages for Live mode

var tipuesearch_pages = ["http://lebinskijasinski.pl/", "http://www.lebinskijasinski.pl/",
 "http://lebinskijasinski.pl/404", "http://www.lebinskijasinski.pl/404",
 "http://lebinskijasinski.pl/cookies", "http://www.lebinskijasinski.pl/cookies",
 "http://lebinskijasinski.pl/kancelaria", "http://www.lebinskijasinski.pl/kancelaria",
 "http://lebinskijasinski.pl/kontakt", "http://www.lebinskijasinski.pl/kontakt",
 "http://lebinskijasinski.pl/us%C5%82ugi/post%C4%99powanie-mediacyjne", "http://www.lebinskijasinski.pl/us%C5%82ugi/post%C4%99powanie-mediacyjne",
 "http://lebinskijasinski.pl/us%C5%82ugi/prawo-administracyjne", "http://www.lebinskijasinski.pl/us%C5%82ugi/prawo-administracyjne",
 "http://lebinskijasinski.pl/us%C5%82ugi/prawo-cywilne", "http://www.lebinskijasinski.pl/us%C5%82ugi/prawo-cywilne",
 "http://lebinskijasinski.pl/us%C5%82ugi/prawo-gospodarcze-i-korporacyjne", "http://www.lebinskijasinski.pl/us%C5%82ugi/prawo-gospodarcze-i-korporacyjne",
 "http://lebinskijasinski.pl/us%C5%82ugi/prawo-karne", "http://www.lebinskijasinski.pl/us%C5%82ugi/prawo-karne",
 "http://lebinskijasinski.pl/us%C5%82ugi/prawo-konkurencji-i-w%C5%82asno%C5%9Bci-intelektualnej", "http://www.lebinskijasinski.pl/us%C5%82ugi/prawo-konkurencji-i-w%C5%82asno%C5%9Bci-intelektualnej",
 "http://lebinskijasinski.pl/us%C5%82ugi/prawo-pracy", "http://www.lebinskijasinski.pl/us%C5%82ugi/prawo-pracy",
 "http://lebinskijasinski.pl/us%C5%82ugi/prawo-rodzinne", "http://www.lebinskijasinski.pl/us%C5%82ugi/prawo-rodzinne",
 "http://lebinskijasinski.pl/wszystkie-us%C5%82ugi", "http://www.lebinskijasinski.pl/wszystkie-us%C5%82ugi",
 "http://lebinskijasinski.pl/wsp%C3%B3%C5%82praca", "http://www.lebinskijasinski.pl/wsp%C3%B3%C5%82praca",
 "http://lebinskijasinski.pl/zesp%C3%B3%C5%82", "http://www.lebinskijasinski.pl/zesp%C3%B3%C5%82"];

/*
Stop words
Stop words list from http://www.ranks.nl/stopwords
*/

var tipuesearch_stop_words = ["ach", "aj", "albo", "bardzo", "bez", "bo", "być", "ci", "cię", "ciebie", "co", "czy", "daleko", "dla", "dlaczego", "dlatego", "do", "dobrze", "dokąd", "dość", "dużo", "dwa", "dwaj", "dwie", "dwoje", "dziś", "dzisiaj", "gdyby", "gdzie", "go", "ich", "ile", "im", "inny", "ja", "ją", "jak", "jakby", "jaki", "je", "jeden", "jedna", "jedno", "jego", "jej", "jemu", "jeśli", "jest", "jestem", "jeżeli	już", "każdy", "kiedy", "kierunku", "kto", "ku", "lub", "ma", "mają", "mam", "mi", "mną", "mnie", "moi", "mój", "moja", "moje", "może", "mu", "my", "na", "nam", "nami", "nas", "nasi", "nasz", "nasza", "nasze", "natychmiast", "nią", "nic", "nich", "nie", "niego", "niej", "niemu", "nigdy", "nim", "nimi", "niż", "obok", "od", "około", "on", "ona", "one", "oni", "ono", "owszem", "po	pod", "ponieważ", "przed", "przedtem", "są", "sam", "sama", "się", "skąd", "tak", "taki", "tam", "ten", "to", "tobą", "tobie", "tu", "tutaj", "twoi", "twój", "twoja", "twoje", "ty", "wam", "wami", "was", "wasi", "wasz", "wasza", "wasze", "we", "więc", "wszystko", "wtedy", "wy", "żaden", "zawsze", "że"];
// Word replace

var tipuesearch_replace = {'words': [
     {'word': 'kanclearia', 'replace_with': 'kancelaria'},
     {'word': 'telfon', 'replace_with': 'telefon'},
     {'word': 'jasińki', 'replace_with': 'jasiński'}
]};


// Weighting

var tipuesearch_weight = {'weight': [
  //    {'url': 'http://lebinskijasinski.pl', 'score': 200},
	//  {'url': 'http://lebinskijasinski.pl/kancelaria', 'score': 190},
	//  {'url': 'http://lebinskijasinski.pl/kontakt', 'score': 180},
	//  {'url': 'http://lebinskijasinski.pl/postepowanie-mediacyjne', 'score': 170},
	//  {'url': 'http://lebinskijasinski.pl/prawo-administracyjne', 'score': 160},
	//  {'url': 'http://lebinskijasinski.pl/prawo-cywilne', 'score': 150},
	//  {'url': 'http://lebinskijasinski.pl/prawo-gospodarcze-i-korporacyjne', 'score': 140},
	//  {'url': 'http://lebinskijasinski.pl/prawo-karne', 'score': 130},
	//  {'url': 'http://lebinskijasinski.pl/prawo-konkurencji-i-wlasnosci-intelektualnej', 'score': 120},
	//  {'url': 'http://lebinskijasinski.pl/prawo-pracy', 'score': 110},
	//  {'url': 'http://lebinskijasinski.pl/prawo-rodzinne', 'score': 100},
	//  {'url': 'http://lebinskijasinski.pl/usługi', 'score': 90},
	//  {'url': 'http://lebinskijasinski.pl/współpraca', 'score': 80},
	//  {'url': 'http://lebinskijasinski.pl/zespół', 'score': 70},
  //    {'url': 'http://lebinskijasinski.pl/search', 'score': 60},
  //    {'url': 'http://lebinskijasinski.pl/index', 'score': 50}
]};


// Stemming

var tipuesearch_stem = {'words': [
     {'word': 'e-mail', 'stem': 'email'},
     {'word': 'telefon', 'stem': 'kontakt'},
     {'word': 'adres', 'stem': 'kontakt'}
]};


// Internal strings

var tipuesearch_string_1 = 'Brak tytułu';
var tipuesearch_string_2 = 'Wyniki wyszukiwania dla';
var tipuesearch_string_3 = 'Zamiast tego wyszukaj';
var tipuesearch_string_4 = '1 wynik';
var tipuesearch_string_5 = 'results';
var tipuesearch_string_6 = 'Poprzedni';
var tipuesearch_string_7 = 'Następny';
var tipuesearch_string_8 = 'Niczego nie znaleziono';
var tipuesearch_string_9 = 'Najczęstsze słowa są w dużej mierze ignorowane';
var tipuesearch_string_10 = 'Tekst zbyt krótki';
var tipuesearch_string_11 = 'Powinno być jeden lub więcej znaków';
var tipuesearch_string_12 = 'Powinno być';
var tipuesearch_string_13 = 'lub więcej znaków';
