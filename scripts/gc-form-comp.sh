#! /bin/bash

NAME=$1

FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages/form/src/components/" && pwd)

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: yarn Form-components \${name} with no space"
  exit 1
fi

DIRNAME="$FILE_PATH/$NAME"
INPUT_NAME=$NAME

if [ -d "$DIRNAME" ]; then
  echo "$NAME component already exists, please change it"
  exit 1
fi
NORMALIZED_NAME=""
for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
  C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
  NORMALIZED_NAME="$NORMALIZED_NAME${C}${i:1}"
done
NAME=$NORMALIZED_NAME

mkdir -p "$DIRNAME"
mkdir -p "$DIRNAME/__tests__"

cat > $DIRNAME/index.tsx <<EOF
import { defineComponent } from 'vue'
/**
 * ${NAME} component
 */
const V${NAME} = defineComponent({
  name : 'v-${NAME}',
  setup(props){
    return () => <div>${NAME}</div>
  },
})
export default V${NAME}
EOF

cat > $DIRNAME/index.stories.tsx  <<EOF
import { defineDemo } from '@/packages/_docs'
import ${NAME} from './index'
import { ${NAME}Control } from './props'
export default defineDemo(
  {
    name: '${NAME}',
    category: 'FORM|${NAME}',
    docs: require('./index.md'),
    control: ${NAME}Control,
    module,
  },
  ${NAME},
)
EOF


cat <<EOF >"$DIRNAME/index.md"
# ${NAME}
> Form 下  ${NAME}组件
```tsx
  // SOME CODE

```
EOF

cat > $DIRNAME/props.ts <<EOF
import { ExtractPropTypes } from 'vue'
import PropTypes from '@/packages/_util/vue-types';
import { tuple } from '@/packages/_util/type'
import { ControlType }  from '@/packages/_util/compPropsType';

// ${NAME} 类型
const ${NAME}Types = tuple('default', 'primary', 'ghost');
export type ${NAME}Type = typeof ${NAME}Types[number];


// ${NAME} 属性定义
export const ${NAME}PropTypes = ()=>({
    ${NAME}: PropTypes.oneOf(${NAME}Types).def('default'),
})
export type ${NAME}Props = Partial<ExtractPropTypes<ReturnType<typeof ${NAME}PropTypes>>>;

// 配置参数StoryBook control
export const ${NAME}Control:ControlType = {
  ${NAME}: {
    type: 'select',
    options: [
      'default', 'primary', 'ghost'
    ],
    default:'default'
  }
}
EOF

