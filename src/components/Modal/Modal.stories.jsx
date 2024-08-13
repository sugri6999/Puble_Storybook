import Modal from '.';
import useOpen from '../../hooks/useOpen';
/**
 #### Modal 페이지 컴포넌트 사용시 `useOpen` 커스텀 훅 사용
```jsx
  const { isOpen, open, close } = useOpen()
...
<button onClick={open}>Open Modal</button>
<Modal isOpen={isOpen} onClose={close} />
```
 #### 프로젝트 진행시 Modal Header,Footer 내부 요소 변할 시 분리 후 `children` 활용
 **/
const ModalStory = {
  title: 'Components/Modal/Modal',
  component: Modal,
  parameters: {
    layout: '',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '375px', height: '675px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = (args) => {
  const { isOpen, open, close } = useOpen();
  return (
    <>
      <button onClick={open}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={close} {...args} />
    </>
  );
};

export default ModalStory;

Default.args = {
  title: 'Modal',
};
export const BottomSheet = (args) => {
  const { isOpen, open, close } = useOpen();
  return (
    <>
      <button onClick={open}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={close} {...args}>
        Content
      </Modal>
    </>
  );
};

BottomSheet.args = {
  title: 'Modal',
  type: 'bottomSheet',
};
export const FullBottomSheet = (args) => {
  const { isOpen, open, close } = useOpen();
  return (
    <>
      <button onClick={open}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={close} {...args}>
        Content
      </Modal>
    </>
  );
};

FullBottomSheet.args = {
  title: 'Modal',
  type: 'bottomSheet',
  size: 'full',
};
