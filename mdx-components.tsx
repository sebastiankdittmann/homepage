import * as React from 'react';
import Link from 'next/link';

export const components = {
    h1: (props: React.ComponentProps<'h1'>) => (
        <h1
            style={{
                fontSize: '2em',
                fontWeight: 'bold',
                margin: '1em 0',
                textAlign: 'center',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
            {...props}
        />
    ),
    h2: (props: React.ComponentProps<'h2'>) => (
        <h2
            style={{
                fontSize: '1.5em',
                fontWeight: 'bold',
                margin: '1em 0',
                textAlign: 'center',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
            {...props}
        />
    ),
    h3: (props: React.ComponentProps<'h3'>) => (
        <h3
            style={{
                fontSize: '1.2em',
                fontWeight: 'bold',
                margin: '1em 0',
                textAlign: 'center',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
            {...props}
        />
    ),
    p: (props: React.ComponentProps<'p'>) => (
        <p
            style={{
                margin: '1em 0',
                textAlign: 'justify',
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
            {...props}
        />
    ),
    ul: (props: React.ComponentProps<'ul'>) => (
        <ul
            style={{
                paddingLeft: '1.5em',
                margin: '1em 0',
                textAlign: 'left',
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
            {...props}
        />
    ),
    ol: (props: React.ComponentProps<'ol'>) => (
        <ol
            style={{
                paddingLeft: '1.5em',
                margin: '1em 0',
                textAlign: 'left',
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
            {...props}
        />
    ),
    li: (props: React.ComponentProps<'li'>) => (
        <li style={{ margin: '0.5em 0' }} {...props} />
    ),
    a: (props: React.ComponentProps<'a'>) => {
        const { href, ...rest } = props;
        if (href && href.startsWith('/')) {
            return <Link href={href} {...rest} />;
        }
        return (
            <a
                target="_blank"
                rel="noopener noreferrer"
                className=" text-amber-600 hover:text-blue-300"
                {...props}
            />
        );
    },
    pre: (props: React.ComponentProps<'pre'>) => (
        <pre
            style={{
                padding: '1em',
                borderRadius: '6px',
                overflowX: 'auto',
                maxWidth: '720px',
                marginLeft: 'auto',
                marginRight: 'auto',
                backgroundColor: 'var(--background-primary)',
            }}
            {...props}
        />
    ),
    code: (props: React.ComponentProps<'code'>) => (
        <code
            style={{
                padding: '0.2em 0.4em',
                borderRadius: '3px',
                fontSize: '0.9em',
                backgroundColor: 'var(--background-secondary)',
            }}
            {...props}
        />
    ),
    em: (props: React.ComponentProps<'em'>) => (
        <em style={{ fontStyle: 'italic' }} {...props} />
    ),
};

export function useMDXComponents() {
    return components;
}