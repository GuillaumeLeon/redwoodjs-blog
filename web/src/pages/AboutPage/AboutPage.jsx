import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
    return (
        <>
            <MetaTags title="About" description="About page" />
            <p>
                This site was made to demonstrate my mastery at Redwood: Look at my work
                work, ye mighty, and depsair!
            </p>
        </>
    )
}

export default AboutPage
