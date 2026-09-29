import { redirect } from "next/navigation"
import { communityService } from "../services/CommunityService"
import { requireAuth } from "@/src/lib/auth-server"
import Heading from "@/src/shared/components/typography/Heading"
import Link from "next/link"
import CommunityItem from "./CommunityItem"

export default async function MyCommunities() {

    const { session } = await requireAuth()
    if (!session) redirect('/auth/login')

    const communities = await communityService.getUserCommunities(session.user)


    return (
        <>
            <Heading level={3} className="my-20">Mis Comunidades</Heading>

            {communities.length > 0 ? (
                <>

                    <ul role="list" className="mt-10 shadow-lg p-10 divide-y divide-gray-100">
                        {communities.map(community => (
                            <CommunityItem
                                key={community.data.id}
                                community={community}
                            />
                        ))}
                    </ul>

                </>
            ) : (
                <>
                    <p className="text-center text-cl mt-10 text-slate-400 uppercase">No tienes Comunidades
                        {' '}
                        <Link href={'/dashboard/communities/create'} className="text-orange-600 font-bold hover:underline">
                            Crea una
                        </Link>
                    </p>


                </>
            )}
        </>
    )
}
