const user: { name: string; height: number } = {
  name: "안희종",
  height: 176
};

// type뒤에 '?'를 붙여주면 '존재하지 않을 수도 있다.' 를 표시
const userWithUnkonowHeight: { name: string; height?: number } = {
  name: "김수한무"
};

const userReadOnly: { readonly name: string; height: number } = {
  name: "안희종",
  height: 176
};

// userReadOnly.name = 'asdf';
// readonly키워드를 붙여주면 key에 해당하는 value를 수정 불가능해 진다. (상수화)
