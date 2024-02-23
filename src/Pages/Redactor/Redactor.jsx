import { useState, useRef } from "react";
import "./Redactor.css";
import TextEditor from "./TextEditor";
import CircularProgress from "@mui/material/CircularProgress";
import { Backdrop } from "@mui/material";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const selectItems = [
  "Биология",
  "Ақпараттық жүйелер",
  "Өнертану",
  "Тарих",
  "Мәдениеттану",
  "Математика",
  "Медицина",
  "Пәнаралық зерттеулер",
  "Жер туралы ғылымдар",
  "Педагогика",
  "Саясаттану",
  "Психология",
  "Ауыл шаруашылығы ғылымдары",
  "Әлеуметтану",
  "Техникалық ғылымдар",
  "Физика",
  "Филология",
  "Философия",
  "Химия",
  "Экономика",
  "Құқықтану",
];

export default function Redactor() {
  const [Loading, setLoading] = useState(false); // загрузка в серевер данные

  //editor
  const editor1 = useRef(null);

  const [contentEdit1, setContent1] = useState("Start writing");
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfError, setPdfError] = useState("");

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const fileType = ["application/pdf"];
  const handlePdfFileChange = (e) => {
    let selectFile = e.target.files[0];
    if (selectFile) {
      if (selectFile && fileType.includes(selectFile.type)) {
        let reader = new FileReader();

        reader.readAsDataURL(selectFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfError("");
        };
      } else {
        setPdfFile(null);
        setPdfError("Please select a file");
      }
    } else {
      console.log("select your file");
    }
  };

  console.log(pdfFile);

  const handleUpdateEdit1 = (event) => {
    const editorContent = event;
    setContent1(editorContent);
  };

  const NewPostPub = async (e) => {
    e.preventDefault();

    console.log(pdfFile)
    console.log(age)
  };
  return Loading ? (
    <Backdrop sx={{ color: "#fff" }} open={true} onClick={Loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : (
    <div>
      <section className="list-content"></section>

      <form onSubmit={NewPostPub} className="form-login">
        <div className="container_about" style={{ textAlign: "center" }}>
          <h3>Өзіңіздің ғылыми мақалаңызды енгізіңіз</h3>
        </div>

        <div
          className="container_about"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "0!important",
          }}
        >
          <FormControl style={{ width: "100%", maxWidth: "500px" }}>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>Мақала түрін таңдаңыз</em>
              </MenuItem>
              {selectItems.map((item) => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="container_about" style={{ textAlign: "center" }}>
          <h4>Мақаланың Атауы</h4>
        </div>
        <div className="outer">
          <span className="inner">
            <div
              style={{
                border: "1px solid black",
                borderRadius: "10px",
                padding: "2px",
                minHeight: "400px",
              }}
            >
              <TextEditor
                editor={editor1}
                contentEdit={contentEdit1}
                handleUpdateEdit={handleUpdateEdit1}
              />
            </div>
          </span>
        </div>

        <div className="container_about" style={{ textAlign: "center" }}>
          <h4>PDF файлы енгізіңіз</h4>
        </div>
        <div className="outer">
          <input
            type="file"
            accept="application/pdf"
            required
            onChange={handlePdfFileChange}
          />
        </div>

        <div className="outer">
          <span className="inner">
            <button className="login__submit" type="submit">
              Жіберу
            </button>
          </span>
        </div>
      </form>
    </div>
  );
}
