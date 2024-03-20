import * as React from 'react';
const SvgSettings = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle
      cx={3}
      cy={3}
      r={3}
      stroke="#000"
      strokeWidth={2}
      transform="matrix(-1 0 0 1 15 9)"
    />
    <path
      fill="#000"
      d="m16.5 4.938.5-.867zm0 14.124-.5-.866zm-9 0-.5.866zm0-14.125.5.867zm1.423-1.922-.974-.225zM5.312 18.74l-.23-.973zm-.91-.237.76-.65zm5.137 3.192.246-.97zm-.616-.71.974-.226zm6.154 0-.974-.226zm-.616.71.245.97zm5.136-3.192-.76-.65zm1.847-9.8.944-.33zm-.35.98-.636-.771zM18.688 5.26l-.23-.974zm2.406 9.057-.636.771zm.35.98-.944-.33zM15.077 3.015l-.974.226zm-.974.226A4 4 0 0 0 16 5.804l1-1.733a2 2 0 0 1-.949-1.281zM16 5.804a4 4 0 0 0 2.917.429l-.459-1.947A2 2 0 0 1 17 4.071zm6.388 2.57a11 11 0 0 0-2.032-3.528l-1.519 1.301A9 9 0 0 1 20.5 9.032zM21 12c0-.621.282-1.176.73-1.545l-1.272-1.543A4 4 0 0 0 19 12zm.73 1.545A2 2 0 0 1 21 12h-2c0 1.244.57 2.356 1.458 3.088zm-1.374 5.609a11 11 0 0 0 2.032-3.527l-1.889-.66a9 9 0 0 1-1.661 2.885zM17 19.928a2 2 0 0 1 1.459-.215l.459-1.946a4 4 0 0 0-2.918.43zm-.949 1.282c.121-.523.449-.993.949-1.282l-1-1.732a4 4 0 0 0-1.897 2.563zM12 23c.932 0 1.84-.116 2.706-.336l-.49-1.939A9 9 0 0 1 12 21zm-2.706-.336c.867.22 1.773.336 2.706.336v-2a9 9 0 0 1-2.215-.274zM7 19.928c.5.289.828.759.949 1.282l1.948-.45A4 4 0 0 0 8 18.196zm-1.459-.215A2 2 0 0 1 7 19.929l1-1.732a4 4 0 0 0-2.918-.43zm-3.929-4.086a11 11 0 0 0 2.032 3.527l1.518-1.302A9 9 0 0 1 3.5 14.967zM3 12c0 .621-.282 1.176-.73 1.545l1.272 1.543A4 4 0 0 0 5 12zm-.73-1.545c.448.369.73.924.73 1.545h2c0-1.244-.57-2.356-1.458-3.088zm1.374-5.609a11 11 0 0 0-2.032 3.527l1.888.66a9 9 0 0 1 1.663-2.886zM7 4.071a2 2 0 0 1-1.458.215l-.46 1.947c.956.225 2 .1 2.918-.43zm.949-1.281A2 2 0 0 1 7 4.07l1 1.733A4 4 0 0 0 9.897 3.24zM11.999 1c-.932 0-1.838.116-2.705.336l.49 1.938A9 9 0 0 1 12 3zm2.707.336A11 11 0 0 0 12 1v2a9 9 0 0 1 2.216.275zM9.897 3.24a.2.2 0 0 1 .012-.036q.007-.012 0-.002a.2.2 0 0 1-.039.034.3.3 0 0 1-.086.037l-.49-1.938c-.813.205-1.218.902-1.345 1.454zM3.542 8.91a.2.2 0 0 1-.031-.032q-.01-.015-.005-.006a.2.2 0 0 1 .01.056.3.3 0 0 1-.016.103l-1.888-.659c-.313.897.176 1.685.659 2.082zm1.54 8.856-.036.005h-.003a.2.2 0 0 1 .048.02.3.3 0 0 1 .071.06l-1.518 1.302c.544.635 1.346.69 1.897.56zm4.703 2.959a.3.3 0 0 1 .085.037.2.2 0 0 1 .04.034q.005.01 0-.002a.2.2 0 0 1-.013-.036l-1.948.451c.127.552.532 1.249 1.345 1.454zm4.318.034-.012.035q-.007.011 0 .002a.2.2 0 0 1 .039-.034.3.3 0 0 1 .085-.038l.491 1.94c.813-.206 1.218-.903 1.345-1.455zm4.735-2.908a.3.3 0 0 1 .071-.06.2.2 0 0 1 .047-.02h-.002l-.036-.005-.46 1.947c.552.13 1.354.075 1.898-.56zm1.662-8.82a.3.3 0 0 1-.016-.103.2.2 0 0 1 .01-.056q.005-.008-.005.006a.2.2 0 0 1-.031.033l1.271 1.543c.483-.397.972-1.185.659-2.082zm-17 5.935a.3.3 0 0 1 .016.104.2.2 0 0 1-.01.056q-.005.008.005-.006a.2.2 0 0 1 .031-.033l-1.271-1.543c-.483.397-.972 1.185-.659 2.082zm15.417-8.734.037-.005h.002a.2.2 0 0 1-.047-.02.3.3 0 0 1-.072-.06l1.52-1.302c-.545-.635-1.347-.69-1.898-.56zM5.163 6.147a.3.3 0 0 1-.072.06.2.2 0 0 1-.047.02q-.011.002.002 0 .013 0 .036.006l.46-1.947c-.552-.13-1.354-.075-1.898.56zm15.295 8.941a.2.2 0 0 1 .031.033q.01.015.005.006a.2.2 0 0 1-.01-.056.3.3 0 0 1 .015-.104l1.889.66c.313-.897-.176-1.685-.659-2.082zM16.05 2.79c-.127-.552-.532-1.249-1.345-1.454l-.49 1.939a.3.3 0 0 1-.086-.038.2.2 0 0 1-.04-.034l.001.002q.006.012.012.036z"
    />
  </svg>
);
export default SvgSettings;