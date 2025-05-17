import { colors } from "./colors";

export interface Playlist {
  id: string;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: "1",
    title: "Mayhem",
    color: colors.teal,
    cover:
      "/images/mayhem.png", // cambia la URL por la que tengas
    artists: ["Lady Gaga"],
  },
  {
    id: "2",
    title: "The Fame Monster",
    color: colors.green,
    cover:
      "/images/theamemonster.png",
    artists: ["Lady Gaga"],
  },
  {
    id: "3",
    title: "Joanne",
    color: colors.rose,
    cover:
      "/images/joanne.png",
    artists: ["Lady Gaga"],
  },
  {
    id: "4",
    title: "Born This Way",
    color: colors.red,
    cover:
       "/images/bornthisway.png",
    artists: ["Lady Gaga"],
  },
  {
    id: "5",
    title: "Chromatica",
    color: colors.pink,
    cover:
      "/images/chromatica.png",
    artists: ["Lady Gaga"],
  },
];

// Para más playlists y sidebarPlaylists, lo mismo que antes, protegido
export const morePlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "a",
  })),
];

export const sidebarPlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "_side",
  })),
];

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
];

interface Song {
  id: string;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}
const songScale = "w_40,h_40,c_scale";

export const songs: Song[] = [
  // Mayhem (2025)
  {
    id: "1",
    title: "Abracadabra",
    image: "/images/mayhem2.png",
    artists: ["Lady Gaga"],
    album: "Mayhem",
    duration: "3:20",
  },
  {
    id: "2",
    title: "Die With a Smile",
    image: "/images/mayhem2.png",
    artists: ["Lady Gaga"],
    album: "Mayhem (2025)",
    duration: "4:00",
  },

  // The Fame Monster
  {
    id: "3",
    title: "Bad Romance",
    image: "/images/thefamemonster2.png",
    artists: ["Lady Gaga"],
    album: "The Fame Monster",
    duration: "4:54",
  },
  {
    id: "4",
    title: "Alejandro",
    image: "/images/thefamemonster2.png",
    artists: ["Lady Gaga"],
    album: "The Fame Monster",
    duration: "4:34",
  },
  {
    id: "5",
    title: "Dance In The Dark",
    image: "/images/thefamemonster2.png",
    artists: ["Lady Gaga"],
    album: "The Fame Monster",
    duration: "4:49",
  },
  {
    id: "6",
    title: "Speechless",
    image: "/images/thefamemonster2.png",
    artists: ["Lady Gaga"],
    album: "The Fame Monster",
    duration: "5:00",
  },
  {
    id: "7",
    title: "Telephone",
    image: "/images/thefamemonster2.png",
    artists: ["Lady Gaga"],
    album: "The Fame Monster",
    duration: "3:40",
  },

  // Joanne
  {
    id: "8",
    title: "Perfect Ilusión",
    image: "/images/joanne.png",
    artists: ["Lady Gaga"],
    album: "Joanne",
    duration: "3:52",
  },
  {
    id: "9",
    title: "Million Reasons",
    image: "/images/joanne.png",
    artists: ["Lady Gaga"],
    album: "Joanne",
    duration: "3:59",
  },
  {
    id: "10",
    title: "Joanne",
    image: "/images/joanne.png",
    artists: ["Lady Gaga"],
    album: "Joanne",
    duration: "3:14",
  },

  // Born This Way
  {
    id: "11",
    title: "Born This Way",
    image: "/images/bornthisway.png",
    artists: ["Lady Gaga"],
    album: "Born This Way",
    duration: "4:20",
  },
  {
    id: "12",
    title: "Judas",
    image: "/images/bornthisway.png",
    artists: ["Lady Gaga"],
    album: "Born This Way",
    duration: "4:10",
  },
  {
    id: "13",
    title: "Hair",
    image: "/images/bornthisway.png",
    artists: ["Lady Gaga"],
    album: "Born This Way",
    duration: "5:00",
  },
  {
    id: "14",
    title: "Scheibe",
    image: "/images/bornthisway.png",
    artists: ["Lady Gaga"],
    album: "Born This Way",
    duration: "4:50",
  },

  // Chromatica
  {
    id: "15",
    title: "Rain On Me",
    image: "/images/chromatica.png",
    artists: ["Lady Gaga"],
    album: "Chromatica",
    duration: "3:02",
  },
];
