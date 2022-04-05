/* TODO : 필름로그 페이지 만들기. */
import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./FilmLogPage.css";
import styled, { css } from "styled-components";
import FilmLogWriting from "../components/filmlog/FilmLogWriting";
import SimpleSlider from "../components/filmlog/SimpleSlider";
import FilmType from "../components/filmlog/FilmType";
import Loader from "../components/Loader";
import Guide from "../components/Guide";
import axios from "axios";

export default function FilmLogPage({ userInfo, isLogin }) {
  // 이미지 스크롤시 로딩 표시 보이게 하기
  const [isLoaded, setIsLoaded] = useState(false);
  // 무한스크롤 이미지리스트
  const [itemLists, setItemLists] = useState([]);
  // 무한스크롤 마지막
  const [isClose, setIsClose] = useState(true);
  // 무한스크롤 페이지 및 참조 지정
  const [page, setPage] = useState(1);
  const observer = useRef();
  // Top3
  const [topThree, setTopThree] = useState([]);
  // 작성창 띄우기
  const [isOpen, setIsOpen] = useState(false);
  // 모달 창 상태 저장
  const [modalClose, setModalClose] = useState(false);

  const getTopThree = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/filmlogs/topthree`, {
        headers: {
          accept: "application/json",
        },
      })
      .then((res) => {
        setTopThree(() => [...res.data.data]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTopThree();
  }, []);

  const getFilmlogData = async (page) => {
    const offset = page * 8 - 8;
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/filmlogs/total?offset=${offset}&limit=8`,
        {
          headers: {
            accept: "application/json",
          },
        }
      )
      .then((res) => {
        setItemLists((prev) => [...prev, ...res.data.data]);
        setIsLoaded(false);
        if (res.data.message === "end") {
          setIsClose(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => page !== 0 && getFilmlogData(page), [page]);

  const onIntersect = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (!observer.current) return;

    const io = new IntersectionObserver(onIntersect, { threshold: 0.5 });
    io.observe(observer.current);

    return () => io && io.disconnect();
  }, [observer]);

  // 사진 등록 페이지 핸들러
  const handleWriteRegister = () => {
    setIsOpen(!isOpen);
  };

  const history = useHistory();

  const handlePictureDetail = (id) => {
    return history.push(`/filmlogdetail/${id}`);
  };

  // * 글쓰기
  const handleUpdate = () => {
    if (!isLogin) {
      setModalClose(true);
    } else {
      handleWriteRegister();
    }
  };

  // * 모달 창 닫기
  const handleModalClose = () => {
    setModalClose(false);
  };

  return (
    <>
      <section className="filmlog-first">
        <div className="filmlog-first-img">
          <SimpleSlider topThree={topThree} />
        </div>
      </section>
      <article className="filmlog-second">
        <div className="filmlog-second-container">
          <nav className="filmlog-second-nav">
            <div className="filmlog-second-nav-title">필름 종류</div>
            <FilmType />
            <div className="nav-flex"></div>
            <div>
              {modalClose ? (
                <Guide handleModalClose={handleModalClose} />
              ) : null}
              <Button onClick={handleUpdate}>사진등록</Button>
              {isOpen ? (
                <FilmLogWriting userInfo={userInfo} setIsOpen={setIsOpen} />
              ) : null}
            </div>
          </nav>
          <div className="filmlog-second-content">
            {itemLists.map((el, key) => (
              <FilmLogImg
                key={el.id}
                src={el.photo}
                onClick={() => {
                  handlePictureDetail(el.id);
                }}
              />
            ))}
          </div>
          {isClose ? (
            <div ref={observer} className="Target-Element">
              {isLoaded && <Loader />}
            </div>
          ) : null}
        </div>
      </article>
    </>
  );
}

const FilmLogImg = styled.img`
  width: 20rem;
  height: 20rem;
  border: 1px solid black;
  margin: 11px;
  object-fit: cover;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    background: tomato;
    transition: 0.3s;
  }
`;

const Button = styled.button`
  padding: 10px 30px;
  border: none;
  border-radius: 20px;
  right: ${(props) => props.rigth || 0};
  ${(props) => {
    if (props.top) {
      return css`
        top: -50px;
      `;
    } else if (props.bottom) {
      return css`
        bottom: -50px;
      `;
    }
  }}
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: white;
    background: tomato;
    transition: 0.3s;
  }
`;
