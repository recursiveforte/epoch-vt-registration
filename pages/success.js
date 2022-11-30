import Error from 'next/error'
import {
  Box,
  Input,
  Divider,
  Card,
  Container,
  Text,
  Button,
  Heading,
  Flex,
  Select,
  Textarea,
  Field,
  Grid
} from 'theme-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Register({ notFound, registrationRecord, params }) {
  return (
    <Container py={4} variant="copy">
      <Card
        px={[4, 4]}
        py={[3, 3]}
        sx={{
          color: 'blue',
          textAlign: 'left'
        }}
      >
        <Text sx={{ color: 'pink', fontSize: '27px', fontWeight: 800 }}>
          Thank you for signing up!
        </Text>
        <br />
        <br />
        <Text>
          ❤️ You're registered for Epoch VT, and we can't wait to meet you! Make sure you <strong>check your email</strong> in
          the coming days and weeks for important updates.
          <br/><br/>
          Feel free to contact Cheru Berhanu at {' '}
          <a href="mailto:cheru@cheru.dev">cheru@cheru.dev</a> for
          help or if you have any questions!
          <br/><br />
          Also, check out{' '}
          <Text
            as={'a'}
            href="https://hackclub.com/"
            target="_blank"
            sx={{ color: 'pink' }}
          >
            Hack Club
          </Text>, a nonprofit network of high school coding clubs and makers around the world, and the organization behind this event.
        </Text>
      </Card>
    </Container>
  )
}
