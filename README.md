# Fito 
비상장 주식회사의 장외주식거래/주식회사 거버넌스 관리 dApp Prototype https://fito.ga
> [![Fito dApp Demo](https://img.youtube.com/vi/1K3tfZqhmAQ/0.jpg)](https://www.youtube.com/watch?v=1K3tfZqhmAQ&feature=youtu.be "Fito dApp Demo")

## 개요
 1. 팀명 : Fito / 한국인터넷진흥원 핀테크X블록체인 아카데미 3기 팀 프로젝트
 2. 프로젝트 아이템 : 비상장 주식회사의 장외주식거래/주주명부 관리 dApp
    - 핵심기능
      - ~~_토큰(=주식) 발행_~~ 비상장 주식 발행관리, 거래 및 정보교환 플랫폼/Ecosystem
      - 정보 생산 및 접근에 따른 Token Economy
      - 비상장 주식회사-주주간 장외주식거래(=유상증자)
      - 온라인 정기/임시 주주총회 및 투표
      - [Prototype] 비상장 주식회사 주주명부 조회
      - [Prototype] 비상장 주식회사 투자자간 주식거래(양수자)
      - [Prototype] 비상장 주식회사 투자자별 주식거래내역 조회
 3. Prototype 구현
    - 구현일정 : 2018-11-05~2018-11-16
    - 구현형태 : 웹 서비스(브라우저 접근)
    - 주요 리소스 및 아키텍쳐
      ![](https://github.com/ZHyoKim/Fito/blob/master/docs/20181113_prototype_architecture.png)
      - FE : AWS S3(Static hosting), Web3.js
      - BE : [KALEIDO](https://kaleido.io)
    - 블록체인 네트워크 구성
      - Network type : Private Network in Cloud Server(KALEIDO)
      - Consensus algorithm : PoA
      - Core : [go-ethereum](https://github.com/ethereum/go-ethereum)
 
## Team Meeting
#### 2018-11-16, 10th
  - 오전 프로젝트 마무리
  - 오후 프로젝트 최종 발표
#### 2018-11-15, 9th
  - 브라우저 템플릿 조정
  - Prototype 동작을 위한 SmartContract 함수 완성
  - Ganache 로컬테스트 완료, KALEIDO web3.js 비동기 문제 해결 중
#### 2018-11-14, 8th
  - Prototype truffle~KALEIDO 배포 테스트 완료
  - 브라우저 유저 인터페이스 연결(Web3) 및 필요 SmartContract 함수 작성
#### 2018-11-13, 7th
  - Prototype 기능 SmartContract 구현
  - Ganache 테스트 환경에서 주요 기능 테스트 성공
#### 2018-11-12, 6th
  - SmartContract Draft 작성
  - Web3-SmartContract 상호작용 테스트
#### 2018-11-09, 5th
  - [중간발표](https://github.com/ZHyoKim/Fito/blob/master/docs/20181109_FITO%20%ED%8C%80%20%EC%A0%9C%EC%95%88%EC%84%9C%20demo%ED%8C%8C%EC%9D%BC.pdf) & 피드백
  - Truffle `pet-shop-tutorial`과 KALEIDO 연동 및 SmartContract 배포/함수 실행 테스트 완료, Ganache-Truffle 환경 공유
  - Solidity 스터디(계속)
  - Idea development/issue : 생태계 내에서의 Token의 정의와 ICO에 대한 오인 가능성
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
