import { Badge, Card, Group, Image, Text } from "@mantine/core";

const Example = ({ data }: { data: any[] }) => {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-4 gap-[120px]">
      {data?.map((item, index) => (
        <>
        <a href={item.href}>
        <Card key={index}>
          <Card.Section>
            <Image src={item.src} alt="Movie" 
            className="flex md:h-[426px] md:w-[290px]"/>
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{item.name}</Text>
            <Image src={item.umur} alt="umur" className="h-[22px] w-[42px] radius-[3px]">
            </Image>
          </Group>

          {/* <Text weight={500} size={19}
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
          ></Image> */}
        </Card>
        </a>
        </>
      ))}
    </div>
  );
};

export default Example;
