# Fito
한국인터넷진흥원 핀테크X블록체인 아카데미 3기 팀 프로젝트 저장소

## 개요
 1. 팀명 : Fito
 2. 프로젝트 아이템 : 비상장 주식회사의 장외주식거래/주주명부 관리 dApp
    - 핵심기능
      - _토큰(=주식) 발행_
      - 비상장 주식회사 주주명부 조회
      - 비상장 주식회사 주주의 장외주식거래 내용 조회
      - 비상장 주식회사-주주간 장외주식거래(=유상증자)
      - 주주간 장외주식거래
    - 구현형태 : 웹 서비스(브라우저 접근)
    - 주요 리소스 및 아키텍쳐
      - FE : Web3.js, AWS
      - BE : [KALEIDO](https://kaleido.io)
    - 블록체인 네트워크 구성
      - Network type : Private Network in Cloud Server(KALEIDO)
      - Consensus algorithm : PoA
      - Core : [go-ethereum](https://github.com/ethereum/go-ethereum)
 
## Team Meeting

#### 2018-11-09, 5th
  - 중간발표 & 피드백
  - KALEIDO-Truffle 연동 완료, Ganache-Truffle 환경 공유
  - Solidity 스터디(계속)
#### 2018-11-08, 4th
  - 프로토타입 외형 설계 및 배포
  - 서비스 구조 설계 및 Solidity 스터디(계속)
  - 멘토링 & 피드백 반영
  - [중간발표 준비 및 문서화 진행](https://docs.google.com/document/d/1EdmWTQI7Lh6pV84EyPcoDZrYv4G9eQUT37-lelq-Ho0/edit?usp=sharing)
#### 2018-11-07, 3rd
  - 프로젝트 구현 대상 구체화
  - 프로젝트 사이트 on AWS : [https://fito.ga](https://fito.ga)
  - [웹사이트 구성, 기획 확장안](https://github.com/tooget/Fito/blob/master/docs/20181107_%EC%84%A4%EA%B3%84.pdf)
#### 2018-11-06, 2nd
  - 프로젝트 아이템 확정, 관련 서비스 및 유관기관 리서시
  - [제안자 아이디어 세부내용 공유](https://github.com/tooget/Fito/blob/master/docs/20181106_%EA%B8%B0%EB%B3%B8%20%EC%95%84%EC%9D%B4%EB%94%94%EC%96%B4(%EC%95%88).md)
#### 2018-11-05, 1st
  - 팀 빌딩, 팀 명(안), 프로젝트 아이템(안) 브레인스토밍
