import { Badge, Card, Group, Image, Text } from "@mantine/core";

const Example = ({ data }: { data: any[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-10 mx-20">
      {data?.map((item, index) => (
        <>
        <a href={item.href}>
        <Card key={index}>
          <Card.Section>
            <Image src={item.src} height={426} width={290} alt="Movie" />
          </Card.Section>

          <Text weight={500} size={19}
          style={{margin: "0.8rem 0rem 0rem 0rem"}}>
            {item.name}
          </Text>

          <Image
          style={{margin: "3.5rem 0rem 2rem 6.8rem"}}
            src={item.umur}
            height={22}
            width={42}
            alt="Umur"
            radius={3}
            place-items-center
          ></Image>
        </Card>
        </a>
        </>
      ))}
    </div>
  );
};

export default Example;
