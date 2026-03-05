import { SVG } from "./SVG";

export const ContactForm = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-xl m-auto px-4">
      <form
        action="https://formspree.io/f/xqeyzwpk"
        method="POST"
        className="bg-black/40 rounded-lg p-4 flex flex-col gap-3"
      >
        {/* Windows icons */}
        <div className="flex flex-row self-end">
          <SVG iconName={"icon-window-minimize"} withShadow={false} isTechIcon={false} width={24} height={24} />
          <SVG
            iconName={"icon-window-restore"}
            withShadow={false}
            isTechIcon={false}
            width={24}
            height={23}
            className={"rotate-180"}
          />
          <SVG iconName={"icon-window-close"} withShadow={false} isTechIcon={false} width={22} height={22} />
        </div>
        <p className="text-green-400 font-mono text-sm">PS{">"} contact-me --email</p>

        {/* Form */}
        <label className="font-mono text-gray-200 flex flex-col gap-3">
          Name:
          <input
            type="text"
            name="name"
            required
            className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 font-mono text-sm text-gray-200 focus:outline-none focus:border-green-400"
          />
        </label>

        <label className="font-mono text-gray-200 flex flex-col gap-3">
          Email:
          <input
            type="email"
            name="email"
            required
            className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 font-mono text-sm text-gray-200 focus:outline-none focus:border-green-400"
          />
        </label>

        <label className="font-mono text-gray-200 flex flex-col gap-3">
          Message:
          <textarea
            name="message"
            rows={4}
            required
            className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 font-mono text-sm text-gray-200 focus:outline-none focus:border-green-400"
          ></textarea>
        </label>
        <input type="hidden" name="_subject" value="New portfolio message"></input>
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        <button
          type="submit"
          className="mt-3 text-sm w-fit m-auto font-mono text-green-400 hover:text-green-700 cursor-pointer transition"
        >
          PS{">"} send-email
        </button>
      </form>
    </section>
  );
};
