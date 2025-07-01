import { Box } from "@chakra-ui/react"
import { useRouter } from 'next/navigation'

export type TextLinkProps = {
    href: string,
    publishDate: Date,
    text: string
}

export default function TextLink(props: TextLinkProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push(props.href);
    }

    return (
        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2} className={'text-gray-700 dark:text-zinc-300'} fontStyle={'italic'}>
            <Box>
                {props.publishDate.toLocaleDateString('de-DE', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                })}:
            </Box>
            <Box onClick={() => handleClick()} cursor={'pointer'} width={'fit-content'} justifyContent={'center'} className={'hover:text-blue-700 dark:hover:text-blue-400'}>
                {props.text}
            </Box>
        </Box>
    )
}