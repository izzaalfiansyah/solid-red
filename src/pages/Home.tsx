import { Link } from '@solidjs/router';

export default () => {
  return (
    <div class="h-[80vh] flex items-center justify-center p-5">
      <div class="text-center">
        <div class="text-5xl font-semibold text-primary">Solidwind</div>
        <div class="mt-5">SolidJS + Typescript + TailwindCSS starter template</div>
        <div class="mt-8">
          <Link
            href="/about"
            class="rounded hover:bg-gray-500 transition shadow-lg bg-primary p-3 px-5 text-white"
          >
            Documentation
          </Link>
        </div>
      </div>
    </div>
  );
};
