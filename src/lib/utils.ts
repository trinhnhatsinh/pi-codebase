import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateSlug(text: string) {
  if (typeof text !== 'string') {
    return ''; // Trả về chuỗi rỗng nếu đầu vào không phải là chuỗi
  }

  // Chuyển đổi tiếng Việt có dấu thành không dấu
  const from = 'áàạảãâấầậẩẫăắằặẳẵéèẹẻẽêếềệểễíìịỉĩóòọỏõôốồộổỗơớờợởỡúùụủũưứừựửữýỳỵỷỹđ';
  const to = 'aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd';

  let slug = '';

  for (const char of text.toLowerCase().trim()) {
    const i = from.indexOf(char);
    slug += i !== -1 ? to[i] : char; // Thay thế ký tự
  }

  return slug
    .replace(/[\s\W-]+/g, '-') // Thay thế ký tự không hợp lệ bằng dấu gạch ngang
    .replace(/^-+|-+$/g, ''); // Loại bỏ dấu gạch ngang ở đầu và cuối
}
