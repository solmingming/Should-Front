const Verifying = (props) => {
    const fileInput = React.useRef(null);
    const [uploadedFileName, setUploadedFileName] =
        useState("파일을 업로드 해 주세요.");

    const handleButtonClick = (e) => {
        fileInput.current.click();
    };

    const [isUploaded, setIsUploaded] = useState(false);

    const handleChange = (e) => {
        const uploadedFile = e.target.files[0];
        if (uploadedFile) {
            setUploadedFileName(uploadedFile.name);
            setIsUploaded(true);
        }
        console.log(uploadedFile);
    };

    const navigate = useNavigate();
    const completeVerify = (e) => {
        navigate("/afVerify2");
    };

    return (
        <>
            <Wrapper>
                <Header title=" " />
                <img class="healthLogo" src={healthLogo} />
                <Container>
                    <div class="ment">
                        의료인 인증을 위한 간단한
                        <br />
                        절차를 진행해주세요.
                    </div>
                    <div class="sub">
                        보건복지부 발급 의사 면허 증명서 스캔본을 업로드
                        해주세요.
                        <br />
                        *면허 번호 포함, jpg, png 사진만 가능, 용량 1M이하
                    </div>
                </Container>
                <React.Fragment>
                    <UploadWrapper>
                        <input
                            class="upload_name"
                            value={uploadedFileName}
                            disabled="disabled"
                        ></input>
                        <input
                            class="upload_hidden"
                            type="file"
                            id="fileUpload"
                            ref={fileInput}
                            accept="image/jpg, image/png, image/jpeg"
                            onChange={handleChange}
                        />
                        <label for="fileUpload">파일 업로드</label>
                    </UploadWrapper>
                </React.Fragment>
                <button
                    onClick={completeVerify}
                    style={{
                        backgroundColor: isUploaded ? "#10c38e" : "#aeaeae",
                    }}
                >
                    인증하기
                </button>
            </Wrapper>
        </>
    );
};

export default Verifying;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #202329;
    .healthLogo {
        width: 135px;
        align-items: center;
        margin-top: 30px;
    }
    button {
        height: 45px;
        width: 85%;
        border-style: none;
        outline: none;
        border-radius: 20px;
        color: white;
        font-size: 12px;
        font-weight: 600;
        margin: 30px 0 270px 0;
    }
`;
const Container = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 20%;
    .ment {
        color: white;
        font-size: 20px;
        font-weight: 600;
        padding-top: 15%;
    }
    .sub {
        color: #aeaeae;
        font-size: 10px;
        padding-top: 10%;
    }
`;
const UploadWrapper = styled.div`
    width: 85%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    label {
        color: white;
        background-color: #aeaeae;
        font-size: 10px;
        padding: 10px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-style: none;
        border-radius: 10px;
        cursor: pointer;
    }
    input[type="file"] {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }
    .upload_name {
        display: flex;
        height: 28px;
        width: 67%;
        padding: 8px;
        font-size: 13px;
        background-color: white;
        justify-content: flex-start;
        align-items: center;
        border-style: none;
        border-radius: 10px;
        color: #aeaeae;
    }
`;
