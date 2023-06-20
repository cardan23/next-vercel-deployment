import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  text: string;
  href: string;
}

const style = {
  color: "#0070f3",
  textDecoration: "underline",
};

const ActiveLink = ({ text, href }: Props) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} style={href === asPath ? style : undefined}>
      {text}
    </Link>
  );
};

export default ActiveLink;
