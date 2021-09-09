import {DefaultFooter} from '@ant-design/pro-layout';

export default () => {
    const defaultMessage = '杭州蚁首网络有限公司';
    const currentYear = new Date().getFullYear();
    return (
        <DefaultFooter
            copyright={`${currentYear} ${defaultMessage}`}
            links={[
                {
                    key: 'any',
                    title: '快速链接们',
                    href: 'https://www.baidu.com',
                    blankTarget: true,
                },
            ]}
        />
    );
};
