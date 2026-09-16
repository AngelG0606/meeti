import HEader from "@/src/shared/components/ui/HEader";

export default function Layout({ children }: LayoutProps<"/">) {
    return (
        <>
            <HEader />
            {children}
        </>
    )
}