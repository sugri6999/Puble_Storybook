import TextArea from '../form/TextArea';
import styled from 'styled-components';
import useOpen from '../../hooks/useOpen';
import Alert from '.';

/**
 #### Text Props를 받으며 AlertButton은 사용페이지에서 `AlertButton` 컴포넌트를 불러와 개별 자식 요소로 추가
 #### Text Props이 있다면 하단 버튼 레이아웃 구조로 출력되며 Text Props가 없다면 전체 레이아웃 버튼 정렬로 출력
```jsx
 const { isOpen, open, close } = useOpen();
...
    <button onClick={open}>Open Alert</button>
    <Alert isOpen={isOpen} {...args}>
    <AlertButton onClick={close}>완료</AlertButton>
    </Alert>
```
 **/
const AlertStory = {
    title: 'Components/Modal/Alert',
    component: Alert,
    parameters: {
        layout: '',
    },
    decorators: [
        (Story) => (
        <Wrap>
            <Story />
        </Wrap>
        ),
    ],
    tags: ['autodocs'],
    argTypes: {
        text: {
        control: 'text',
        description: 'Modal 내부 Text 입니다.',
        defaultValue: { summary: undefined },
        type: { summary: 'string', required: false },
        },
        height: {
        control: 'select',
        description: 'modal 높이 사이즈 입니다.',
        defaultValue: { summary: undefined },
        type: { summary: 'string', required: true },
        },
    },
};

export const Default = (args) => {
    const { isOpen, open, close } = useOpen();

    const hanleClick = () => {
        alert('확인 버튼입니다');
    };

    return (
        <>
            <button onClick={open}>Open Alert</button>
            <Alert isOpen={isOpen} onClose={close} onClick={hanleClick} {...args}>
                <Text>Description</Text>
                <TextArea />
            </Alert>
        </>
    );
};

export default AlertStory;

Default.args = {
    title: '반려',
    // height: 500
};

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
`;

const Text = styled.span`
    margin-top: 12px;
    font-size: 12px;
`;
