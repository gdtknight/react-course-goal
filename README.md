# Simple Course-goal ToDoList

## Why this project started?
Udemy discord community 에서 2월 28일까지 완강 챌린지 이벤트를 시작했다.<br>
완강 대상 강의로 **`【한글자막】 React 완벽 가이드 with Redux, Next.js, TypeScript`** 를 선택했고,<br>
학습 내용,  실습을 위해 작성한 프로젝트를 저장하기 위한 목적으로 저장소를 개설하였다.

## Record Convention
전체 강의 목차 및 진행 내용은 `GitHub Project` 를 활용하여 기록하였고,<br>
강의 수강 중에 새로 작성을 시작한 프로젝트들은 `React-xxx-xxx` 의 형식을 가진 `GitHub Repository`에 저장하였다.<br>

각`Repository`에는 강의`Section`별로 `Issue`를 작성했고, `feature/#이슈번호-Section제목` 의 형태로 실습 내용을 기록하였다.<br>
학습 및 실습 내용은 `Issue`별로 간단한 `comment`를 첨부하였으며, `commit message`에도 간략하게 기술되어 있다.<br>
또한, 실습 코드 중간중간에도 학습한 내용과 관련된 부분들이 간단하게 `comment`로 남겨져 있다.

## Remind Plan
한 번의 수강으로 모든 내용들을 다 기억할 수는 없을 것이기에<br>
`GitHub Project`에 기록된 내용들과 각 `Issue`마다 기록한 `commit`, `comment`를 바탕으로 가볍게 리마인드 할 계획이다.<br>
<br>
기타 다른 곳에서 관련된 내용들을 학습하게 될 경우, 생각이 날 때 `README.md` 하단에 날짜와 함께 관련 내용들을 기록하게 될 것 같다.

## Branch Management Strategy
`Git Flow`에 기반한 브랜치 관리 전략을 적용해보았다.<br>
먼저 전반적인 실습 과정은 `develop branch`를 기본으로 한다.<br>
각 `Section`마다 `develop branch`를 기반으로 생성된 `feature branch`를 생성하여 실습을 진행한다.<br>
해당 `Section`의 실습이 모두 완료되는 경우 `develop branch`에 `PR`을 통해 `merge`한다.<br>
모든 실습이 완료된 경우 `develop branch`를 `main branch`에 `PR`을 통해 `merge`하고 종료한다.<br> 

## Related Section
- 
