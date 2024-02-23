import { useState, useEffect } from "react";
import axios from "axios";
import "./getpostmainload.css";
import ServerError from "../Error/error";
import url from "../backend-server-url";
import Posts from "./posts_request";
import Counter from "../Mobx/ProfileRender/ProfileMobxRener";
import axiosApiInstance from "../API/auth-header";
import { useNavigate } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const selectItems = [
  { name: "Биология", slug: "biologiya" },
  { name: "Ақпараттық жүйелер", slug: "aqparattyq-jyyeler" },
  { name: "Өнертану", slug: "onertanu" },
  { name: "Тарих", slug: "tarikh" },
  { name: "Мәдениеттану", slug: "maideniettanu" },
  { name: "Математика", slug: "matematika" },
  { name: "Медицина", slug: "meditsina" },
  { name: "Пәнаралық зерттеулер", slug: "panaralyq-zertteuler" },
  { name: "Жер туралы ғылымдар", slug: "zher-turaly-gylymdar" },
  { name: "Педагогика", slug: "pedagogika" },
  { name: "Саясаттану", slug: "sayastanu" },
  { name: "Психология", slug: "psikhologiya" },
  { name: "Ауыл шаруашылығы ғылымдары", slug: "awyl-sharuashylygy-gylymdary" },
  { name: "Әлеуметтану", slug: "aleumettanu" },
  { name: "Техникалық ғылымдар", slug: "tekhnikalyy-gylymdar" },
  { name: "Физика", slug: "fizika" },
  { name: "Филология", slug: "filologiya" },
  { name: "Философия", slug: "filosofiya" },
  { name: "Химия", slug: "khimiya" },
  { name: "Экономика", slug: "ekonomika" },
  { name: "Құқықтану", slug: "quqyqtanu" },
];

const PostListItem = () => {
  let navigate = useNavigate();
  // const [DataLatesNews, setDataLatesNews] = useState([]);
  // const [currentPage, setcurrentPage] = useState(1);
  // const [fetching, setfetching] = useState(true);
  // const [loading, setloading] = useState(true);
  // const [error, seterror] = useState(false);

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);

    const selectedElement = selectItems.find(
      (item) => item.slug === event.target.value
    );
    if (selectedElement) {
      navigate(`/main_news/post/${selectedElement.slug}`);
    }
  };

  // useEffect(() => {
  //   localStorage.removeItem("next_main");
  //   localStorage.removeItem("next");
  // }, []);

  // useEffect(() => {
  //   if (fetching) {
  //     axios
  //       .get(`${url.baseUrl}${url.lates_news}${currentPage}`)
  //       .then((response) => {
  //         localStorage.setItem("next", response.data.next);
  //         setDataLatesNews([...DataLatesNews, ...response.data.results]);
  //         setloading(false);
  //         seterror(false);
  //         setcurrentPage((prevState) => prevState + 1);
  //       })
  //       .catch((error) => {
  //         if (error.response.status !== 404) {
  //           seterror(true);
  //         }
  //       })
  //       .finally(() => setfetching(false));
  //   }
  // }, [fetching]);

  // useEffect(() => {
  //   document.addEventListener("scroll", scrollHandler);

  //   return function () {
  //     document.removeEventListener("scroll", scrollHandler);
  //   };
  // }, []);

  // function handleDeleteElement(id) {
  //   axiosApiInstance
  //     .delete(`${url.baseUrl}${url.Post.post_delete}/${id}`, {})
  //     .then((res) => {
  //       const post = res.data;
  //       console.log(post);
  //       Counter.trigger_delete();
  //       setDataLatesNews((prevState) => prevState.filter((el) => el.id !== id));
  //     })
  //     .catch((err) => {
  //       if (err.response.status === 401) navigate("/login", { replace: true });
  //       else console.log(err);
  //     });
  // }

  // const scrollHandler = (e) => {
  //   if (
  //     e.target.documentElement.scrollHeight -
  //       (e.target.documentElement.scrollTop + window.innerHeight) <
  //       100 &&
  //     localStorage.getItem("next") !== "null"
  //   ) {
  //     setfetching(true);
  //   }
  // };

  return (
    <div className="Container">
      {/* {error ? (
        <ServerError
          title={" Сервер қате!"}
          error_text={
            "Сервер сұрауларға жауап бермейді. Егер сіз бұл хабарламаны көрген болсаңыз, бетті қайта жүктей аласыз.Егер ол көмектеспесе бізге жазыңыз"
          }
        />
      ) : loading ? (
        <div className="box-loading -white" />
      ) : (
        DataLatesNews.map((postlist) => (
          <Posts
            key={postlist.id}
            category={postlist.category}
            id={postlist.id}
            image={postlist.image1}
            title={postlist.title}
            content_text={postlist.context}
            image1={postlist.image1}
            author={{
              Author_user: postlist.user.username,
              author_first_name: postlist.user.first_name,
              author_last_name: postlist.user.last_name,
            }}
            published_date={postlist.date_add}
            likes={postlist.likes.length}
            value={postlist.value}
            delete={handleDeleteElement}
          />
        ))
      )} */}

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
            <MenuItem value={item.slug} key={item.slug}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default PostListItem;
