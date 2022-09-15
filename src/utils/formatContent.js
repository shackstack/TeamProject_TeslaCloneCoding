const formatContent = (content) => {
    const format = (start) => {
        if (content.includes(start)) {
            return content.split(start)[1].split("\n")[1].trim();
        }
        return null;
    }
    const detail = format("상세설명:");
    const partNumber = format("부품 번호:");
    const importer = format("수입사:");
    const origin = format("원산지:");
    const guarantee = format("품질 보증 표준:");
    const certificate = format("인증서:");
    const applicableModels = format("적용 가능한 차량 모델:");
    const releaseDate = format("동일모델의 출시년월:");
    const size = format("사이즈:");
    const contact = format("A/S 서비스 법인 및 연락처:");
    const conditions = format("거래 조건에 관한 정보:");
    const mapper = {
        "상세설명": detail,
        "부품 번호": partNumber,
        "수입사": importer,
        "원산지": origin,
        "품질 보증 표준": guarantee,
        "인증서": certificate,
        "적용 가능한 차량 모델": applicableModels,
        "동일모델의 출시년월": releaseDate,
        "사이즈": size,
        "A/S 서비스 법인 및 연락처": contact,
        "거래 조건에 관한 정보": conditions
    };
    const filteredMapper = Object.keys(mapper).reduce(function (filtered, key) {
        if (mapper[key]) {
            filtered[key] = mapper[key];
        }
        return filtered;
    }, {});
    return filteredMapper;
}

export default formatContent;