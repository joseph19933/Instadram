import { Text, ScrollView } from "react-native";
import Container from "../components/Container";
import { useSessionContext } from "../utils/context";
import HomePost from "../components/HomePost";


function Home() {

    const value = useSessionContext();
    return (
        <ScrollView>
            <Container>
                <Text>HOME SCREEN</Text>
                {value.posts.map((post, index) => (
                    <HomePost
                        key={index}
                        name={post.name}
                        image={post.image}
                        description={post.description}
                    />
                ))}


            </Container>
        </ScrollView>

    );
}
export default Home;