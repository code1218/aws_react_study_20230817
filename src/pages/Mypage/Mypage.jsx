/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';
import * as S from './Styles.js';


function Mypage(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SProfileImgBox}>
                    <img css={S.SProfileImg} src="https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" />
                    <input css={S.SFileHidden} type="file" />
                </div>
            </div>
            <div css={S.SContainer}>
                <div>
                    <label htmlFor="username">사용자명 </label>
                    <input type="text" id='username'/>
                </div>
                <div>
                    <label htmlFor="name">이름 </label>
                    <input type="text" id='name'/>
                </div>
                <div>
                    <label htmlFor="email">이메일 </label>
                    <input type="text" id='email'/>
                </div>
                <div>
                    <button>저장</button>
                </div>
            </div>
        </div>
    );
}

export default Mypage;