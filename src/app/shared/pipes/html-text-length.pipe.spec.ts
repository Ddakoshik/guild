import { HtmlTextLengthPipe } from './html-text-length.pipe';

describe('TextLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new HtmlTextLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
