import { MenuNav } from "../components/MenuNav";

export interface MenuItem {
  id: string;
  groupId: string;
  url: string;
  urlNm: string;
  obj: string;
  otp1: string;
  otp2: string;
  otp3: string;
  seqNo: string;
  useYn: string;
  depth: string;
  type: string;
}

// 데이터
const menuData: MenuItem[] = [
  {
    id: "1",
    groupId: "0",
    url: "사용자",
    urlNm: "사용자",
    obj: "MAIN",
    otp1: "MAIN",
    otp2: "",
    otp3: "Y",
    seqNo: "3",
    useYn: "Y",
    depth: "0",
    type: "0",
  },
  {
    id: "100",
    groupId: "0",
    url: "",
    urlNm: "관리자",
    obj: "MAIN",
    otp1: "MAIN",
    otp2: "",
    otp3: "Y",
    seqNo: "2",
    useYn: "Y",
    depth: "0",
    type: "1",
  },
  {
    id: "101",
    groupId: "100",
    url: "#Menu",
    urlNm: "사용자 관리",
    obj: "management",
    otp1: "MENU",
    otp2: "",
    otp3: "Y",
    seqNo: "0",
    useYn: "Y",
    depth: "1",
    type: "1",
  },
  {
    id: "102",
    groupId: "100",
    url: "#Menu",
    urlNm: "업무 관리",
    obj: "work",
    otp1: "MENU",
    otp2: "",
    otp3: "Y",
    seqNo: "1",
    useYn: "Y",
    depth: "1",
    type: "1",
  },
  {
    id: "103",
    groupId: "100",
    url: "#Menu",
    urlNm: "시스템 이력",
    obj: "system",
    otp1: "MENU",
    otp2: "",
    otp3: "Y",
    seqNo: "2",
    useYn: "Y",
    depth: "1",
    type: "1",
  },
  {
    id: "104",
    groupId: "100",
    url: "#Menu",
    urlNm: "설정",
    obj: "settings",
    otp1: "MENU",
    otp2: "",
    otp3: "Y",
    seqNo: "4",
    useYn: "Y",
    depth: "1",
    type: "1",
  },
  {
    id: "166",
    groupId: "104",
    url: "#mngUser",
    urlNm: "사용자 등록",
    obj: "mngUser",
    otp1: "BUTTON",
    otp2: "",
    otp3: "Y",
    seqNo: "1",
    useYn: "Y",
    depth: "3",
    type: "1",
  },
  {
    id: "167",
    groupId: "104",
    url: "#mngUser",
    urlNm: "사용자 수정",
    obj: "mngUser",
    otp1: "BUTTON",
    otp2: "",
    otp3: "Y",
    seqNo: "2",
    useYn: "Y",
    depth: "3",
    type: "1",
  },
];

export const MenuPage = () => {
  //   reponse.data 정제 함수
  const nest = (menuData: MenuItem[], parentId: string = "0"): MenuItem[] => {
    return menuData
      .filter((item) => item.groupId === parentId) // obj가 menuId와 같은 항목 찾기
      .map((item) => ({
        ...item,
        childrens: nest(menuData, item.id) || [], // 자식 메뉴 트리화
      }));
  };

  const transMenuData = nest(menuData);

  return (
    <>
      MenuPage
      <MenuNav menuData={transMenuData} />
    </>
  );
};
