let language = "eng";

const Title = () => {
const [lang, setLang] = React.useState(language);
return lang === "eng" ? data.eng.service.title : lang === "heb" ? data.heb.service.title : ""
}