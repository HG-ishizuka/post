import  { type SidebarGroupList } from '../types/SidebarGroupList';

export const sidebarGroupListData: SidebarGroupList[] = [
    {
        name: '一般キャビネット',
        links: [
            { name: '営業部', path: '/home' },
            { name: '経理部', path: '/#' },
            { name: '総務部', path: '/#' },
        ],
    },
    {
        name: '電帳法キャビネット',
        links: [
            { name: '営業部', path: '/#' },
            { name: '経理部', path: '/#' },
            { name: '総務部', path: '/#' },
        ],
    },
];
