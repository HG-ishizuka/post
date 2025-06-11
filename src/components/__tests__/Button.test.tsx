import React from 'react';
import { render, screen} from '@testing-library/react';
import { Button } from '../atoms/Button';
import '@testing-library/jest-dom';

test('children が正しく表示される', () => {
    render(<Button>テスト</Button>);
    // 画面上に "テスト" という文字が存在する要素が仮想DOMに存在していることを確認する
    expect(screen.getByText('テスト')).toBeInTheDocument();
});


// test('テストケースの名前', () => {
//     // テスト
// });