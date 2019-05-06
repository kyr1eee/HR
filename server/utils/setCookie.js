export function setCookie(name, value) {
  document.cookie = name + "=" + escape(value);
}
