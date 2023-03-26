import "./@types/Gjs/index";
import * as Gtk from "./@types/Gjs/Gtk-3.0";

Gtk.init(null);

const window = new Gtk.Window({
  name: "Gjs + TypeScript",
  default_width: 200,
  default_height: 200,
});

window.connect("destroy", () => {
  Gtk.main_quit();
});

window.show_all();

Gtk.main();