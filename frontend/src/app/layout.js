"use client";

import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/home/layout/Navbar";
import Footer from "@/components/home/layout/Footer";
import { ThemeProvider } from "@material-tailwind/react";

const inter = Inter({ subsets: ["latin"] });

const customMaterialTailwind = {
  drawer: {
    styles: {
      base: {
        overlay: {
          position: "fixed",
        },
      },
    },
  },
  tabsHeader: {
    styles: {
      base: {
        bg: "bg-lightGray",
        borderRadius: "rounded-full",
        p: "p-1 px-4",
      },
    },
  },
  tab: {
    defaultProps: {
      activeClassName: "text-lightGray ",
    },
    styles: {
      base: {
        indicator: {
          bg: "bg-primaryColor",
          borderRadius: "rounded-full",
        },
      },
    },
  },
  accordion: {
    styles: {
      base: {
        header: {
          initial: {
            borderWidth: "border-0",
          },
        },
      },
    },
  },
  radio: {
    defaultProps: {
      color: "blue",
      label: undefined,
      icon: undefined,
      ripple: true,
      className: "",
      disabled: false,
      containerProps: undefined,
      labelProps: undefined,
      iconProps: undefined,
    },
    valid: {
      colors: [
        "blue-gray",
        "gray",
        "brown",
        "deep-orange",
        "orange",
        "amber",
        "yellow",
        "lime",
        "light-green",
        "green",
        "teal",
        "cyan",
        "light-blue",
        "blue",
        "indigo",
        "deep-purple",
        "purple",
        "pink",
        "red",
      ],
    },
    styles: {
      base: {
        root: {
          display: "inline-flex",
          alignItems: "items-center",
        },
        container: {
          position: "relative",
          display: "flex",
          alignItems: "items-center",
          cursor: "cursor-pointer",
          p: "p-3",
          borderRadius: "rounded-full",
        },
        input: {
          peer: "peer",
          position: "relative",
          appearance: "appearance-none",
          width: "w-5",
          height: "h-5",
          borderWidth: "border",
          borderRadius: "rounded-full",
          borderColor: "border-bg-primaryColor",
          cursor: "cursor-pointer",
          transition: "transition-all",
          before: {
            content: "before:content['']",
            display: "before:block",
            bg: "before:bg-primaryColor",
            width: "before:w-12",
            height: "before:h-12",
            borderRadius: "before:rounded-full",
            position: "before:absolute",
            top: "before:top-2/4",
            left: "before:left-2/4",
            transform: "before:-translate-y-2/4 before:-translate-x-2/4",
            opacity: "before:opacity-0 hover:before:opacity-0",
            transition: "before:transition-opacity",
          },
        },
        label: {
          color: "text-gray-700",
          fontWeight: "font-light",
          userSelect: "select-none",
          cursor: "cursor-pointer",
          mt: "mt-px",
          bg: "bg-transparent",
        },
        icon: {
          position: "absolute",
          top: "top-2/4",
          left: "left-2/4",
          translate: "-translate-y-2/4 -translate-x-2/4",
          pointerEvents: "pointer-events-none",
          opacity: "opacity-0 peer-checked:opacity-100",
          transition: "transition-opacity",
        },
        disabled: {
          opacity: "opacity-50",
          pointerEvents: "pointer-events-none",
        },
      },
    },
  },
  input: {
    defaultProps: {
      variant: "outlined",
      size: "md",
      color: "blue",
      label: "",
      error: false,
      success: false,
      icon: undefined,
      labelProps: undefined,
      containerProps: undefined,
      shrink: false,
      className: "",
    },
    valid: {
      variants: ["standard", "outlined", "static"],
      sizes: ["md", "lg"],
      colors: [
        "black",
        "white",
        "blue-gray",
        "gray",
        "brown",
        "deep-orange",
        "orange",
        "amber",
        "yellow",
        "lime",
        "light-green",
        "green",
        "teal",
        "cyan",
        "light-blue",
        "blue",
        "indigo",
        "deep-purple",
        "purple",
        "pink",
        "red",
      ],
    },
    styles: {
      base: {
        container: {
          position: "relative",
          width: "w-full",
          minWidth: "min-w-[200px]",
        },
        input: {
          peer: "peer",
          width: "w-full",
          height: "h-full",
          bg: "bg-transparent",
          color: "text-blue-gray-700",
          fontFamily: "font-sans",
          fontWeight: "font-normal",
          outline: "outline outline-0 focus:outline-0",
          disabled: "disabled:bg-blue-gray-50 disabled:border-0",
          transition: "transition-all",
        },
        label: {
          display: "flex",
          width: "w-full",
          height: "h-full",
          userSelect: "select-none",
          pointerEvents: "pointer-events-none",
          position: "absolute",
          left: "left-0",
          fontWeight: "font-normal",
          textOverflow: "truncate",
          color: "peer-placeholder-shown:text-blue-gray-500",
          lineHeight: "leading-tight peer-focus:leading-tight",
          disabled:
            "peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500",
          transition: "transition-all",
        },
        icon: {
          display: "grid",
          placeItems: "place-items-center",
          position: "absolute",
          color: "text-blue-gray-500",
        },
        asterisk: {
          display: "inline-block",
          color: "text-red-500",
          ml: "ml-0.5",
        },
      },
      variants: {
        outlined: {
          base: {
            input: {
              borderWidth: "placeholder-shown:border",
              borderColor:
                "placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200",
              floated: {
                borderWidth: "border focus:border-2",
                borderColor: "border-t-transparent focus:border-t-transparent",
              },
            },
            inputWithIcon: {
              pr: "!pr-9",
            },
            icon: {
              top: "top-6",
              left: "right-2",
              transform: "-translate-y-2/4",
            },
            label: {
              position: "-top-1.5",
              fontSize: "peer-placeholder-shown:text-sm",
              floated: {
                fontSize: "text-[11px] peer-focus:text-[11px]",
              },
              before: {
                content: "before:content[' ']",
                display: "before:block",
                boxSizing: "before:box-border",
                width: "before:w-2.5",
                height: "before:h-1.5",
                mt: "before:mt-[6.5px]",
                mr: "before:mr-1",
                borderColor: "peer-placeholder-shown:before:border-transparent",
                borderRadius: "before:rounded-tl-md",
                floated: {
                  bt: "before:border-t peer-focus:before:border-t-2",
                  bl: "before:border-l peer-focus:before:border-l-2",
                },
                pointerEvents: "before:pointer-events-none",
                transition: "before:transition-all",
                disabled: "peer-disabled:before:border-transparent",
              },
              after: {
                content: "after:content[' ']",
                display: "after:block",
                flexGrow: "after:flex-grow",
                boxSizing: "after:box-border",
                width: "after:w-2.5",
                height: "after:h-1.5",
                mt: "after:mt-[6.5px]",
                ml: "after:ml-1",
                borderColor: "peer-placeholder-shown:after:border-transparent",
                borderRadius: "after:rounded-tr-md",
                floated: {
                  bt: "after:border-t peer-focus:after:border-t-2",
                  br: "after:border-r peer-focus:after:border-r-2",
                },
                pointerEvents: "after:pointer-events-none",
                transition: "after:transition-all",
                disabled: "peer-disabled:after:border-transparent",
              },
            },
          },
          sizes: {
            md: {
              container: {
                height: "h-10",
              },
              input: {
                fontSize: "text-sm",
                px: "px-3",
                py: "py-2.5",
                borderRadius: "rounded-[7px]",
              },
              label: {
                lineHeight: "peer-placeholder-shown:leading-[3.75]",
              },
              icon: {
                width: "w-5",
                height: "h-5",
              },
            },
            lg: {
              container: {
                height: "h-11",
              },
              input: {
                fontSize: "text-sm",
                px: "px-3",
                py: "py-3",
                borderRadius: "rounded-md",
              },
              label: {
                lineHeight: "peer-placeholder-shown:leading-[4.1]",
              },
              icon: {
                width: "w-6",
                height: "h-6",
              },
            },
          },
        },
        standard: {
          base: {
            input: {
              borderWidth: "border-b",
              borderColor: "placeholder-shown:border-blue-gray-200",
            },
            inputWithIcon: {
              pr: "!pr-7",
            },
            icon: {
              top: "top-2/4",
              right: "right-0",
              transform: "-translate-y-1/4",
            },
            label: {
              position: "-top-1.5",
              fontSize: "peer-placeholder-shown:text-sm",
              floated: {
                fontSize: "text-[11px] peer-focus:text-[11px]",
              },
              after: {
                content: "after:content[' ']",
                display: "after:block",
                width: "after:w-full",
                position: "after:absolute",
                bottom: "after:-bottom-1.5",
                left: "left-0",
                borderWidth: "after:border-b-2",
                scale: "after:scale-x-0",
                floated: {
                  scale: "peer-focus:after:scale-x-100",
                },
                transition: "after:transition-transform after:duration-300",
              },
            },
          },
          sizes: {
            md: {
              container: {
                height: "h-11",
              },
              input: {
                fontSize: "text-sm",
                pt: "pt-4",
                pb: "pb-1.5",
              },
              label: {
                lineHeight: "peer-placeholder-shown:leading-[4.25]",
              },
              icon: {
                width: "w-5",
                height: "h-5",
              },
            },
            lg: {
              container: {
                height: "h-12",
              },
              input: {
                fontSize: "text-sm",
                px: "px-px",
                pt: "pt-5",
                pb: "pb-2",
              },
              label: {
                lineHeight: "peer-placeholder-shown:leading-[4.875]",
              },
              icon: {
                width: "w-6",
                height: "h-6",
              },
            },
          },
        },
        static: {
          base: {
            input: {
              borderWidth: "border-b",
              borderColor: "placeholder-shown:border-blue-gray-200",
            },
            inputWithIcon: {
              pr: "!pr-7",
            },
            icon: {
              top: "top-2/4",
              right: "right-0",
              transform: "-translate-y-1/4",
            },
            label: {
              position: "-top-2.5",
              fontSize: "text-sm peer-focus:text-sm",
              after: {
                content: "after:content[' ']",
                display: "after:block",
                width: "after:w-full",
                position: "after:absolute",
                bottom: "after:-bottom-2.5",
                left: "left-0",
                borderWidth: "after:border-b-2",
                scale: "after:scale-x-0",
                floated: {
                  scale: "peer-focus:after:scale-x-100",
                },
                transition: "after:transition-transform after:duration-300",
              },
            },
          },
          sizes: {
            md: {
              container: {
                height: "h-11",
              },
              input: {
                fontSize: "text-sm",
                pt: "pt-4",
                pb: "pb-1.5",
              },
              label: {
                lineHeight: "peer-placeholder-shown:leading-tight",
              },
              icon: {
                width: "w-5",
                height: "h-5",
              },
            },
            lg: {
              container: {
                height: "h-12",
              },
              input: {
                fontSize: "text-sm",
                px: "px-px",
                pt: "pt-5",
                pb: "pb-2",
              },
              label: {
                lineHeight: "peer-placeholder-shown:leading-tight",
              },
              icon: {
                width: "w-6",
                height: "h-6",
              },
            },
          },
        },
      },
    },
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider value={customMaterialTailwind}>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
