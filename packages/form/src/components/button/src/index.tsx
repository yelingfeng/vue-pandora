import { defineComponent , inject, Text , VNode } from 'vue'
import Wave from '@/packages/_util/wave';
import { isFunction } from '@/packages/_util/index'
import { ButtonPropTypes } from './props';
import { getSlot, getComponent } from '@/packages/_util/props-util';
import { defaultConfigProvider } from '@/packages/_util/config-provider';


const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
const props = ButtonPropTypes()
/**
 * button component
 */
export default defineComponent({
  name : 'VButton',
  inheritAttrs: false,
  props,
  setup(props){
    const clickHandler = (e:Event)=>{
      if(isFunction(props.click)){
          props.click(e)
      }
      return 
    }
    return {
      configProvider: inject('configProvider', defaultConfigProvider),
      clickHandler,
      children: [],
      iconCom: undefined,
      delayTimeout: undefined,
      sizeMap: {
        large: 'lg',
        small: 'sm',
      },
      sLoading: false,
      hasTwoCNChar: false
    }
  },
  methods: {
    getClasses() {
      const {
        prefixCls: customizePrefixCls,
        type,
        shape,
        size,
        hasTwoCNChar,
        sLoading,
        ghost,
        block,
        $attrs,
      } = this;
      const getPrefixCls = this.configProvider.getPrefixCls;
      const prefixCls = getPrefixCls('btn', customizePrefixCls);
      const autoInsertSpace = this.configProvider.autoInsertSpaceInButton !== false;

      // large => lg
      // small => sm
      let sizeCls = '';
      switch (size) {
        case 'large':
          sizeCls = 'lg';
          break;
        case 'small':
          sizeCls = 'sm';
          break;
        default:
          break;
      }
      const iconType = sLoading ? 'loading' : this.iconCom;
      return {
        [$attrs.class as string]: $attrs.class,
        [`${prefixCls}`]: true,
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${shape}`]: shape,
        [`${prefixCls}-${sizeCls}`]: sizeCls,
        [`${prefixCls}-icon-only`]: this.children.length === 0 && iconType,
        [`${prefixCls}-loading`]: sLoading,
        [`${prefixCls}-background-ghost`]: ghost || type === 'ghost',
        [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar && autoInsertSpace,
        [`${prefixCls}-block`]: block,
      };
    },
    fixTwoCNChar() {
      // Fix for HOC usage like <FormatMessage />
      const node = this.$refs.buttonNode as HTMLElement;
      if (!node) {
        return;
      }
      const buttonText = node.textContent;
      if (this.isNeedInserted() && isTwoCNChar(buttonText)) {
        if (!this.hasTwoCNChar) {
          this.hasTwoCNChar = true;
        }
      } else if (this.hasTwoCNChar) {
        this.hasTwoCNChar = false;
      }
    },
    handleClick(event: Event) {
      const { sLoading } = this.$data;
      if (sLoading) {
        return;
      }
      this.$emit('click', event);
    },
    insertSpace(child: VNode, needInserted: boolean) {
      const SPACE = needInserted ? ' ' : '';
      if (child.type === Text) {
        let text = (child.children as string).trim();
        if (isTwoCNChar(text)) {
          text = text.split('').join(SPACE);
        }
        return <span>{text}</span>;
      }
      return child;
    },
    isNeedInserted() {
      const { iconCom, type } = this;
      return this.children.length === 1 && !iconCom && type !== 'link';
    },
  },
  render(){
    this.iconCom = getComponent(this, 'icon');
    const { type, htmlType, iconCom, disabled, handleClick, sLoading, href, title, $attrs } = this;
    const children = getSlot(this);
    this.children = children;
    const classes = this.getClasses();

    const buttonProps = {
      ...$attrs,
      title,
      disabled,
      class: classes,
      onClick: handleClick,
    };
    const iconNode = sLoading ? <LoadingOutlined /> : iconCom;

    const autoInsertSpace = this.configProvider.autoInsertSpaceInButton !== false;
    const kids = children.map(child =>
      this.insertSpace(child, this.isNeedInserted() && autoInsertSpace),
    );

    if (href !== undefined) {
      return (
        <a {...buttonProps} href={href} ref="buttonNode">
          {iconNode}
          {kids}
        </a>
      );
    }

    const buttonNode = (
      <button {...buttonProps} ref="buttonNode" type={htmlType || 'button'}>
        {iconNode}
        {kids}
      </button>
    );

    if (type === 'link') {
      return buttonNode;
    }

    return <Wave ref="wave">{buttonNode}</Wave>;
  }
}) 