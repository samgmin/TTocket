# 🎪🎫 블록체인 NFT기반 티켓 서비스 똑똑한 티켓, 똑켓(TTocket)🎫🎪
### [링크 바로가기](https://j8b210.p.ssafy.io)
![메인페이지](https://user-images.githubusercontent.com/76838814/230253829-3fcb14d0-3f04-42dd-ab15-fa73cef2c200.png)

---
## :clapper: 소개 영상
### [UCC 링크](https://www.youtube.com/watch?v=2Xvp1GhXbV4)
<br>

## :date: 프로젝트 진행 기간
- *2023/2/20 ~ 2023/4/7 (6주)*
- SSAFY 8기 특화 프로젝트 [블록체인] 
<br>

## :heavy_check_mark: TTocket - 배경
- 누구나 한 번쯤 공연 티켓팅 경험 있으시죠?
- 저희는 티켓팅에 실패하고 아쉬웠던 적이 많습니다.
- 암표거래 관련 기사들을 찾아보며 화가 났습니다.
- 그래서, 암표거래가 없는 깨끗한 티켓팅 서비스 똑켓을 개발했습니다!
<br>

## :heavy_check_mark: TTocket - 개요
- 블록체인 기술을 이용해 대체 불가능한 나만의 NFT 티켓을 구매해서 암표 거래를 방지해보세요.
- 공평한 티켓팅을 위해 FIFO의 Queue를 활용한 티켓팅 대기열 기능을 제공합니다.
- 추억을 담아, 영구적으로 소유할 수 있는 NFT 티켓 관리 서비스를 제공합니다.
<br>

## :heavy_check_mark: 기대 효과
- **암표 거래 예방** : 스마트컨트랙트와 NFT 기술을 활용, 암표 거래 방지
- **클린한 티켓팅** : 암표상들이 참여하지 않는 환경에서 팬들 간 공정한 티켓팅 경쟁
- **NFT 티켓 활용 추억** : 영구적으로 보존되는 NFT 티켓을 통해 공연에서의 추억을 간직

<br>

## :pushpin: 주요 기능
- **Metamask 계정을 이용한 로그인**
- **공연 관리**
- **티켓팅**
  - Websocket, Redis Queue 활용한 티켓팅 트래픽 처리
  -  NFT 티켓 민팅을 통한 티켓 소유권 보장
- **티켓 관리**
  - 공연 전 티켓 목록 제공
  - QR 코드를 통한 입장 관리 및 로그 관리
  - 티켓 취소 시 환불 수수료 발생
  - 취소한 티켓을 다른 사람이 구매할 경우 수수료 환불!
- **티켓 보관함**
  - 공연 후에도 티켓 구매 기록이 블록체인 네트워크에 영구적으로 보관
  - 공연에 대한 후기를 작성할 수 있는 다이어리 기능
  - 주최자 측에서 티켓 소유자들에게만 추가 컨텐츠 제공



<br>





## :art: 주요 기술
- **BlockChain**
  - Solidity
  - Truffle
  - Ganache
<br>

- **FrontEnd**
  - React
  - TypeScript
  - Web3.js
  - HTML
  - CSS
  - JavaScript
  - Figma
  - SockJS
<br>

- **BackEnd**
  - IPFS
  - Java 11
  - Spring Data JPA
  - Spring Boot
  - MySQL
  - Redis Sentinel
  - STOMP
<br>

- **Deployment**
  - Nginx
  - Docker
  - Jenkins
  - AWS EC2
  - Gitlab
<br>


## :art: 버전 정보
### Ver 1.0 (~ 3/23)
  - `Client` 
    - 로그인, 티켓 목록, 공연 예매 디자인 구현
    - MetaMask 연결 및 스마트 계약 연결
    - 구현된 페이지 API 연결
  - `Server` 
    - 로그인, 티켓 목록, 공연 예매에 필요한 API 개발 완료
  - `BlockChain`
    - 공연 데이터 관리, 티켓 민팅, 티켓 취소 등 관리
    #### 1.1 
    - `Client`
      - 티켓 예매 디자인 관련 hotfix
    - `Server`
      - PUT method CORS 에러 해결
  
### Ver 2.0 (~ 3/28)
  - `Client`
    - 티켓 상세보기, 보관함, 감상평, 공연 등록 페이지 구현
    - 티켓 목록 및 상세보기
  - `Server`
    - Swagger 설정
    - 좋아요 관련 기능 개발
    - 공연 목록 디테일
  - `BlockChain`
    - 블록체인 네트워크에 스마트 컨트랙트 배포
    - Web3 연동 : MetaMask, 스마트 컨트랙트
    - 티켓 취소 로직 변경
    #### 2.1
      - `Server`
        - Metamask 지갑 로그인 기능
        - 닉네임 등록 여부 확인

### Ver 3.0 (~ 4/5)
  - `Client`
    - 보관함 다이어리 작성 구현
    - 결제 및 결제 취소 기능 연결
  - `Server`
    - QR 코드 처리, 공연 입장 로그 관리
    #### 3.1
      - `Client`
        - 다이어리 기능 연결
        - 비하인드 등록 기능 연결
      - `Server`
        - 티켓팅 대기열 기능 추가
    #### 3.2
      - `Client`
        - 보관함 디자인 수정 및 비하인드 목록 구현
        - QR 코드 생성 구현
<br>


## :open_file_folder: 시스템 아키텍처
![똑켓아키텍쳐](https://user-images.githubusercontent.com/76838814/230514964-19be7961-dd27-44ee-95ee-c5b27ad28057.png)


## :open_file_folder: 프로젝트 파일 구조
### BlockChain
```
└─blockchain
    ├─contracts
    │   ├─Ticket.sol
    │   └─TicketDTO.sol
    ├─migrations
    │   └─1_initial_migration
    └─test
        └─Ticket_Test
```

### FrontEnd
```
└frontend
    ├─nginx
    ├─public
    └─src
        ├─app
        │  └─redux-modules
        ├─assets
        │  └─fonts
        ├─components
        │  ├─date
        │  └─modal
        ├─css
        ├─pages
        │  ├─box
        │  ├─error
        │  ├─login
        │  ├─perform
        │  ├─qr
        │  ├─reserve
        │  │  └─seat
        │  ├─sponsor
        │  └─ticket
        └─services
            └─web3

```
### BackEnd 1: 티켓팅
```
└backend
    └─src
        ├─main
        │  ├─java
        │  │  └─com
        │  │      └─ssafy
        │  │          └─ttocket
        │  │              ├─config
        │  │              ├─controller
        │  │              ├─domain
        │  │              ├─dto
        │  │              ├─exception
        │  │              ├─filter
        │  │              ├─interceptor
        │  │              ├─repository
        │  │              │  └─querydsl
        │  │              └─service
        │  └─resources
        └─test
            └─java
                └─com
                    └─ssafy
                        └─ttocket
```
### BackEnd 2: 좌석 예매 대기열 
```
└─tttocket
    └─src
        └─main
          ├─java
          │  └─com
          │      └─ssafy
          │          └─tttocket
          │              ├─config
          │              ├─controller
          │              ├─dto
          │              └─service
          └─resources
```

<br>

## 🤝 협업 툴
- Git
- Notion
- JIRA
- MatterMost
- Webex
- Discord
- Kakaotalk
<br>

## :clipboard: 프로젝트 산출물
- [서비스기획서](./docs/md/%EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%84%9C.md)
- [기능명세서](./docs/md/%EA%B8%B0%EB%8A%A5%EB%AA%85%EC%84%B8%EC%84%9C.md)
- [회의록](https://gusty-snowflake-455.notion.site/f6ad1bd6378646f396c035a8657c5940)
- [메뉴트리](./docs/md/%EB%A9%94%EB%89%B4%ED%8A%B8%EB%A6%AC.md)
- [Jira](./docs/md/jira.md)
- [아키텍처](./docs/md/%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98.md)
- [와이어프레임](https://www.figma.com/file/scgH6g471y2hUKrv7KoVeO/%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?node-id=0%3A1&t=zkg9ESqNb1mEXyr3-1)
- [컨벤션](./docs/md/%EC%BB%A8%EB%B2%A4%EC%85%98.md)
- [API 명세서](./docs/md/API%20%EB%AA%85%EC%84%B8%EC%84%9C.md)
- [ERD](./docs/md/ERD.md)
- [회의록](https://gusty-snowflake-455.notion.site/f6ad1bd6378646f396c035a8657c5940)
- [최종발표 PPT](./docs/%EC%B5%9C%EC%A2%85%EB%B0%9C%ED%91%9C.pdf)
- [중간발표 PPT](./docs/%EC%A4%91%EA%B0%84%EB%B0%9C%ED%91%9C.pdf) 
- [포팅메뉴얼](https://gusty-snowflake-455.notion.site/652aca8352174016898a122641fca563)

<br>  

## :sparkles: 서비스 화면
1️⃣ 입장 화면
  - 서비스 기능 요약소개
  - MetaMask 로그인 버튼
  - 첫 로그인 시 닉네임 등록
  - ![로그인닉네임](https://user-images.githubusercontent.com/110011732/230308766-3c697f43-7cc7-4a7a-bf42-fc7dcb2b0de1.gif)
  - ![Matamask 로그인](https://user-images.githubusercontent.com/110011732/230302499-4f388f9c-5648-433f-bdd0-5e777911cf86.gif)

2️⃣ 공연 목록
  - 티켓팅 오픈예정, 공연 예정, 관심목록 세 가지 구분
  - 공연 예정, 관심목록 각각 모두보기 기능
  - ![공연목록](https://user-images.githubusercontent.com/110011732/230303159-71f8678c-acb3-4d9a-afbd-fe3efa89c288.gif)

3️⃣ 티켓팅 대기열
  - 티켓팅 오픈시간에 예상되는 트래픽 처리를 위한 대기열 화면
  - 총 대기자 수, 사용자 몇 번째인지 확인 가능
  - ![대기열큐100](https://user-images.githubusercontent.com/110011732/230303570-2ac93bb1-eb80-4abb-b932-0f0b4d37101a.gif)

4️⃣ 티켓 구매
  - 좌석 선택 및 규정 동의 후 결제 진행
  - MetaMask 연동 결제 완료 시 티켓 예매 성공
  - ![티켓민팅 - 2 좌석선택 ](https://user-images.githubusercontent.com/110011732/230303794-b03b930e-b876-4db1-a687-eb1905a77aad.gif)


5️⃣ 티켓 관리
  - 공연 전 티켓 목록
  - 티켓 목록 상세보기 통해 QR코드, 티켓 취소 가능
  - ![티켓 관리](https://user-images.githubusercontent.com/110011732/230304770-d324ab0c-1f2f-4c1f-890f-e0166cb2f8cc.gif)

6️⃣ 티켓 취소
  - 티켓 취소 환불 예정 금액 제공
  - 취소 티켓 타 사용자가 구매 시 수수료까지 환불
  - ![티켓 취소](https://user-images.githubusercontent.com/110011732/230305655-53b11867-994b-45f9-8793-dc4a302c20d1.gif)
  - 티켓 취소 이전 금액
  - ![취소이전금액](https://user-images.githubusercontent.com/110011732/230305925-6e5323d4-6be4-4712-b1dd-5ec4db22e15c.png)
  - 티켓 취소 이후 금액
  - ![취소이후금액](https://user-images.githubusercontent.com/110011732/230305932-6344beda-997c-4b6d-abb2-1d467f541636.png)


7️⃣ 티켓 보관
  - 공연 후 티켓 목록
  - 상세보기, 다이어리 작성, 비하인드 관람 기능
  - ![티켓보관 - 1](https://user-images.githubusercontent.com/110011732/230305236-dca2c49e-4c9e-436f-bd60-1e5666cc84e1.gif)

<br>
