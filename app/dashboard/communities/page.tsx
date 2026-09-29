import MyCommunities from '@/src/features/communities/components/MyCommunities'
import { communityService } from '@/src/features/communities/services/CommunityService'
import { requireAuth } from '@/src/lib/auth-server'
import Heading from '@/src/shared/components/typography/Heading'
import { generatePageTitle } from '@/src/shared/utils/metadata'
import { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
    title: generatePageTitle('Administra tus Comunidades')
}


export default async  function CommunitiesPage() {

    
    return (
        <>
            <Heading>Administra tus Comunidades</Heading>

            <div className="flex justify-between flex-col lg:flex-row">
                <Link
                    href="/dashboard/communities/create"
                    className="mt-5 block lg:inline-block text-center bg-orange-500 hover:bg-orange-600 transition-colors text-xs lg:text-xl text-white py-3 px-10  font-bold"
                >Crear Comunidad</Link>
                <Link
                    href="/dashboard/communities/joined"
                    className="mt-5 block lg:inline-block text-center bg-pink-500 hover:bg-pink-600 transition-colors text-xs lg:text-xl text-white py-3 px-10  font-bold"
                >Comunidades a las que te uniste</Link>
            </div>

            <MyCommunities />

        </>
    )
}
