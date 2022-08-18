const qnaList = [
    {
        q: '1. 패션하면 떠오르는 나라는 어디인가요?',
        a: [
            { answer: 'a. 프랑스', type: ['kenzo', 'louis vuitton', 'saint laurent', 'givenchy', 'chanel', 'celine', 'dior', 'margiela', 'balenciaga', 'hermes'] },
            { answer: 'b. 이탈리아', type: ['gucci', 'versace', 'stone island', 'prada', 'valentino', 'fendi', 'moncler', 'bottega veneta'] }
        ]
    },
    {
        q: '2. 미니멀과 맥시멀 중 본인의 스타일에 맞는 카테고리는 무엇인가요?',
        a: [
            { answer: 'a. 미니멀', type: ['saint laurent', 'margiela', 'prada', 'moncler', 'bottega veneta', 'hermes'] },
            { answer: 'b. 맥시멈', type: ['kenzo', 'gucci', 'louis vuitton', 'versace', 'stone island', 'givenchy', 'balenciaga'] },
            { answer: 'c. 둘 다 상관없다.', type: ['chanel', 'dior', 'valentino', 'fendi', 'celine'] }
        ]
    },
    {
        q: '3. 톤온톤 코디와 톤인톤 코디 중 무엇을 더 선호 하시나요?',
        a: [
            { answer: 'a. 톤온톤', type: ['kenzo', 'gucci', 'louis vuitton', 'versace', 'celine', 'balenciaga', 'valentino', 'bottega veneta', 'hermes'] },
            { answer: 'b. 톤인톤', type: ['stone island', 'saint laurent', 'givenchy', 'chanel', 'dior', 'margiela', 'prada', 'fendi', 'moncler'] }
        ]
    },
    {
        q: '4. 패턴이 들어가 있는 옷을 선호하시나요? 그렇다면  어떤 패턴을 선호하시는지 골라주시고 아니라면 그렇지 않음을 선택해주세요.',
        a: [
            { answer: 'a. 화려한 패턴', type: ['kenzo', 'versace', 'stone island', 'givenchy', 'balenciaga'] },
            { answer: 'b. 브랜드 로고 패턴', type: ['gucci', 'louis vuitton', 'dior', 'bottega veneta', 'fendi'] },
            { answer: 'c. 그렇지 않음', type: ['saint laurent', 'chanel', 'margiela', 'celine', 'prada', 'valentino', 'moncler', 'hermes'] }
        ]
    },
    {
        q: '5. 어떤 장르를 즐겨 입으시나요?',
        a: [
            { answer: 'a. 스트릿', type: ['kenzo', 'gucci', 'louis vuitton', 'versace', 'stone island', 'givenchy', 'dior', 'celine', 'balenciaga', 'moncler'] },
            { answer: 'b. 미니멀', type: ['saint laurent', 'chanel', 'margiela'] },
            { answer: 'c. 클래식', type: ['gucci', 'louis vuitton', 'chanel', 'dior', 'prada', 'valentino', 'fendi', 'bottega veneta', 'hermes'] },
            { answer: 'd. 고프고어', type: ['stone island', 'moncler'] },
            { answer: 'e. 락시크', type: ['saint laurent', 'celine'] }
        ]
    },
    {
        q: '6. 명품이라 하면 오래된 브랜드 일 수록 가치가 높아진다고 생각하시나요?',
        a: [
            { answer: 'a. 네', type: ['gucci', 'louis vuitton', 'chanel', 'celine', 'dior', 'prada', 'balenciaga', 'hermes'] },
            { answer: 'b. 아니오', type: ['kenzo', 'versace', 'stone island', 'saint laurent', 'givenchy', 'margiela', 'valentino', 'fendi', 'moncler', 'bottega veneta'] }
        ]
    },
    {
        q: '7. 가죽 상품에 관심이 있으신가요?',
        a: [
            { answer: 'a. 네', type: ['gucci', 'louis vuitton', 'saint laurent', 'chanel', 'celine', 'dior', 'margiela', 'balenciaga', 'valentino', 'fendi', 'bottega veneta', 'hermes'] },
            { answer: 'a. 아니오', type: ['kenzo', 'versace', 'stone island', 'givenchy', 'prada', 'moncler'] }
        ]
    },
    {
        q: '8. 명품이라 하면 상류층 귀족들 부터 즐겨 입던 브랜드들이 명품이라고 생각하시나요?',
        a: [
            { answer: 'a. 네', tyep: ['gucci', 'louis vuitton', 'saint laurent', 'chanel', 'dior', 'balenciaga', 'fendi', 'hermes'] },
            { answer: 'b. 아니오', tyep: ['kenzo', 'versace', 'stone island', 'givenchy', 'celine', 'margiela', 'prada', 'valentino', 'moncler', 'bottega veneta'] }
        ]
    },
    {
        q: '9. 젠더리스에 대해서 어떻게 생각하시나요?',
        a: [
            { answer: 'a. 긍정적으로 생각합니다.', type: ['gucci', 'louis vuitton', 'saint laurent', 'chanel', 'celine', 'margiela'] },
            { answer: 'b. 부정적으로 생각합니다.', type: ['kenzo', 'versace', 'stone island', 'givenchy', 'dior', 'prada', 'balenciaga', 'valentino', 'fendi', 'moncler', 'bottega veneta', 'hermes'] }
        ]
    },
    {
        q: '10. 인지도가 높은 브랜드를 선호하시나요?',
        a: [
            { answer: 'a. 네', type: ['louis vuitton', 'chanel', 'hermes'] },
            { answer: 'b. 아니오', type: ['kenzo', 'gucci', 'versace', 'stone island', 'saint laurent', 'givenchy', 'celine', 'dior', 'margiela', 'prada', 'balenciaga', 'valentino', 'fendi', 'moncler', 'moncler'] }
        ]
    },
    {
        q: '11. 디자이너의 국적에 따라 브랜드가 영향을 받는다고 생각하시나요?',
        a: [
            { answer: 'a. 네', type: ['gucci', 'versace', 'stone island', 'saint laurent', 'givenchy', 'celine', 'dior', 'margiela', 'prada', 'balenciaga', 'valentino', 'fendi', 'moncler', 'moncler', 'louis vuitton', 'chanel', 'hermes'] },
            { answer: 'a. 아니오', type: ['kenzo'] }
        ]
    }
]

const infoList = [
    {
        name: '겐조',
        desc: '겐조 설명'
    },
    {
        name: '구찌',
        desc: '구찌 설명'
    },
    {
        name: '루이비통',
        desc: '루이비통 설명'
    },
    {
        name: '베르사체',
        desc: '베르사체 설명'
    },
    {
        name: '스톤아일랜드',
        desc: '스톤아일랜드 설명'
    },
    {
        name: '생로랑',
        desc: '생로랑 설명'
    },
    {
        name: '지방시',
        desc: '지방시 설명'
    },
    {
        name: '샤넬',
        desc: '샤넬 설명'
    },
    {
        name: '셀린느',
        desc: '셀린느 설명'
    },
    {
        name: '디올',
        desc: '디올 설명'
    },
    {
        name: '마르지엘라',
        desc: '마르지엘라 설명'
    },
    {
        name: '프라다',
        desc: '프라다 설명'
    },
    {
        name: '발렌시아가',
        desc: '발렌시아가 설명'
    },
    {
        name: '발렌티노',
        desc: '발렌티노 설명'
    },
    {
        name: '펜디',
        desc: '펜디 설명'
    },
    {
        name: '몽클레르',
        desc: '몽클레르 설명'
    },
    {
        name: '보테가베네타',
        desc: '보테가베네타 설명'
    },
    {
        name: '에르메스',
        desc: '에르메스+ 설명'
    }
]

