import { Card, CardBody, Skeleton } from '@chakra-ui/react'

const GameCardSkeleton = () => {
    return (
        <Card>
            <Skeleton height={'200px'}></Skeleton>
            <CardBody></CardBody>
        </Card>
    )
}

export default GameCardSkeleton